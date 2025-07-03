type SectionProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
};

export const Section = ({
  children,
  title,
  ...props
}: React.PropsWithChildren<SectionProps>) => (
  <section className="mb-6" {...props}>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);
