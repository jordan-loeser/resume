import Balancer from "react-wrap-balancer";

type ContentBlockProps = {
  title?: string;
  subtitle?: string;
  body?: string;
  smallBody?: string;
  bullets?: string[];
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
  body,
  smallBody,
  bullets,
  useBalancer = true,
}: ContentBlockProps) => (
  <article className="space-y-1">
    <hgroup className="text-sm font-semibold leading-tight">
      {title && (
        <h4>
          <ConditionalBalancer balance={useBalancer}>
            {title}
          </ConditionalBalancer>
        </h4>
      )}
      {subtitle && (
        <h5 className="text-gray-700">
          <ConditionalBalancer balance={useBalancer}>
            {subtitle}
          </ConditionalBalancer>
        </h5>
      )}
    </hgroup>
    {(body || smallBody) && (
      <div className="font-light leading-snug">
        {body && (
          <p className="text-sm">
            <ConditionalBalancer balance={useBalancer}>
              {body}
            </ConditionalBalancer>
          </p>
        )}
        {smallBody && (
          <p className="text-xs text-gray-600">
            <ConditionalBalancer balance={useBalancer}>
              {smallBody}
            </ConditionalBalancer>
          </p>
        )}
      </div>
    )}
    {bullets && bullets.length > 0 && (
      <ul className="list-[square] pl-4 text-sm font-light leading-snug space-y-1 text-gray-600">
        {bullets?.map((bullet) => (
          <li key={bullet}>
            <ConditionalBalancer balance={useBalancer}>
              {bullet}
            </ConditionalBalancer>
          </li>
        ))}
      </ul>
    )}
  </article>
);
