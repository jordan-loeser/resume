import Balancer from "react-wrap-balancer";

type ContentBlockProps = {
  title?: string;
  subtitle?: string;
  subtitle2?: string;
  body?: string;
};

export const ContentBlock = ({
  title,
  subtitle,
  subtitle2,
  body,
}: ContentBlockProps) => (
  <div className="mb-2">
    <hgroup className="mb-1">
      {title && (
        <h4 className="text-md">
          <Balancer>{title}</Balancer>
        </h4>
      )}
      {subtitle && (
        <h5 className="text-sm text-gray-500">
          <Balancer>{subtitle}</Balancer>
        </h5>
      )}
      {subtitle2 && (
        <h5 className="text-sm text-gray-500">
          <Balancer>{subtitle2}</Balancer>
        </h5>
      )}
    </hgroup>
    {body && (
      <p className="text-sm font-light leading-4 mb-4">
        <Balancer>{body}</Balancer>
      </p>
    )}
  </div>
);
