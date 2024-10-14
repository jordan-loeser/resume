import Balancer from "react-wrap-balancer";

type ContentBlockProps = {
  title?: string;
  subtitle?: string;
  subtitle2?: string;
  body?: string;
  smallBody?: string;
  useBalancer?: boolean;
};

const ConditionalBalancer = ({
  children,
  balance,
}: {
  children: string;
  balance: boolean;
}) => {
  return balance ? <Balancer>{children}</Balancer> : children;
};

export const ContentBlock = ({
  title,
  subtitle,
  subtitle2,
  body,
  smallBody,
  useBalancer = true,
}: ContentBlockProps) => (
  <div className="mb-2">
    <hgroup className="mb-1">
      {title && (
        <h4 className="text-sm font-bold">
          <ConditionalBalancer balance={useBalancer}>
            {title}
          </ConditionalBalancer>
        </h4>
      )}
      {subtitle && (
        <h5 className="text-sm">
          <ConditionalBalancer balance={useBalancer}>
            {subtitle}
          </ConditionalBalancer>
        </h5>
      )}
      {subtitle2 && (
        <h6 className="text-sm">
          <ConditionalBalancer balance={useBalancer}>
            {subtitle2}
          </ConditionalBalancer>
        </h6>
      )}
    </hgroup>
    {body && (
      <p className="text-sm font-light">
        <ConditionalBalancer balance={useBalancer}>{body}</ConditionalBalancer>
      </p>
    )}
    {smallBody && (
      <p className="text-xs font-light">
        <ConditionalBalancer balance={useBalancer}>
          {smallBody}
        </ConditionalBalancer>
      </p>
    )}
  </div>
);
