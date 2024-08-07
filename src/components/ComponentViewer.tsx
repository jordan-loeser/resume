import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Size = {
  width: number;
  height: number;
};

const PADDING = 0;

const getChildScaleFactor = (windowSize: Size, childSize: Size) => {
  if (childSize.width === 0 || childSize.height === 0) return 1;

  let scaleFactor = 1;
  const childIsLandscape = childSize.width > childSize.height;

  // Landsacpe
  if (childIsLandscape) {
    scaleFactor = windowSize.width / childSize.width;
    const resultingHeight = childSize.height * scaleFactor;
    // Check that it still fits vertically
    if (resultingHeight > windowSize.height) {
      scaleFactor = windowSize.height / childSize.height;
    }
  }
  // Portrait
  else {
    scaleFactor = windowSize.height / childSize.height;
    const resultingWidth = childSize.width * scaleFactor;
    // Check that it still fits horizontally
    if (resultingWidth > windowSize.width) {
      scaleFactor = windowSize.width / childSize.width;
    }
  }

  console.log(">>>", scaleFactor);

  return scaleFactor < 1 ? scaleFactor : 1;
};

export const ComponentViewer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const sizeRef = useRef<HTMLDivElement | null>(null);

  const [windowSize, setWindowSize] = useState<Size>({ width: 0, height: 0 });
  const [childSize, setChildSize] = useState<Size>({ width: 0, height: 0 });
  const [scaleFactor, setScaleFactor] = useState(1);

  useLayoutEffect(() => {
    if (!sizeRef.current) return;
    setChildSize(() => {
      if (!sizeRef.current) return { width: 0, height: 0 };
      const { width, height } = sizeRef.current.getBoundingClientRect();
      console.log("size change!!", width, height);
      return { width, height };
    });
  }, [sizeRef]);

  useLayoutEffect(() => {
    setScaleFactor(() => getChildScaleFactor(windowSize, childSize));
  }, [windowSize, childSize]);

  useEffect(() => {
    const onResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setWindowSize]);

  useEffect(() => {
    console.log({ childSize, windowSize });
  }, [childSize, windowSize]);

  return (
    <div
      id="stage"
      className="w-screen h-screen flex justify-center bg-slate-100 "
    >
      <div
        ref={sizeRef}
        style={{
          transform: `scale(${scaleFactor})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
