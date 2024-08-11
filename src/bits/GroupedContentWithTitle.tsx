import { ReactNode } from "react";
import Balancer from "react-wrap-balancer";

type GroupedContentWithTitleProps = {
  title?: string;
  titlePosition?: "left" | "top";
  children: ReactNode;
};

export const GroupedContentWithTitle = ({
  title,
  titlePosition = "top",
  children,
}: GroupedContentWithTitleProps) => {
  const isTop = titlePosition === "top";
  return (
    <article className={isTop ? "mb-2" : "mb-2 grid grid-cols-4 gap-3"}>
      <div className="col-span-1">
        <h3 className="font-display text-md font-bold mb-1">
          <Balancer>{title}</Balancer>
        </h3>
      </div>
      <div className="col-span-3">{children}</div>
    </article>
  );
};
