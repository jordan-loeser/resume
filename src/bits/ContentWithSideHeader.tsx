import { ReactNode } from "react";
import Balancer from "react-wrap-balancer";

export const ContentWithSideHeader = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => (
  <article className="mb-6 grid grid-cols-4 gap-3">
    <div className="col-span-1">
      <h3 className="text-sm font-bold leading-5">
        <Balancer>{title}</Balancer>
      </h3>
    </div>
    <div className="col-span-3">{children}</div>
  </article>
);
