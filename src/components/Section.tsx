type SectionProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
};

export const Section = ({
  children,
  title,
  ...props
}: React.PropsWithChildren<SectionProps>) => (
  <section className="mb-5" {...props}>
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);
