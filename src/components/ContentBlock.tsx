import Balancer from "react-wrap-balancer";

type ContentBlockProps = {
  title?: string;
  subtitle?: string;
  subtitle2?: string;
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
  subtitle2,
  body,
  smallBody,
  bullets,
  useBalancer = true,
}: ContentBlockProps) => (
  <>
    <hgroup className="mb-1 last:mb-0">
      {title && (
        <h4 className="text-sm font-bold text-gray-800">
          <ConditionalBalancer balance={useBalancer}>
            {title}
          </ConditionalBalancer>
        </h4>
      )}
      {subtitle && (
        <h5 className="text-sm font-medium text-gray-600">
          <ConditionalBalancer balance={useBalancer}>
            {subtitle}
          </ConditionalBalancer>
        </h5>
      )}
      {subtitle2 && (
        <h6 className="text-sm font-medium text-gray-600">
          <ConditionalBalancer balance={useBalancer}>
            {subtitle2}
          </ConditionalBalancer>
        </h6>
      )}
    </hgroup>
    {body && (
      <p className="text-sm font-light text-gray-700 leading-snug mb-2 last:mb-0">
        <ConditionalBalancer balance={useBalancer}>{body}</ConditionalBalancer>
      </p>
    )}
    {smallBody && (
      <p className="text-xs font-light text-gray-500 leading-snug mb-2 last:mb-0">
        <ConditionalBalancer balance={useBalancer}>
          {smallBody}
        </ConditionalBalancer>
      </p>
    )}
    {bullets && (
      <ul className="list-[square] pl-4 text-xs font-light text-gray-500 leading-snug mb-2 last:mb-0">
        {bullets?.map((bullet) => (
          <li key={bullet} className="mb-1 last:mb-0">
            <ConditionalBalancer balance={useBalancer}>
              {bullet}
            </ConditionalBalancer>
          </li>
        ))}
      </ul>
    )}
  </>
);
