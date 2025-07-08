type SectionProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
};

export const Section = ({
  children,
  title,
  ...props
}: React.PropsWithChildren<SectionProps>) => (
  <section className="mb-6" {...props}>
    <h2 className="mb-2 text-lg font-semibold">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);
