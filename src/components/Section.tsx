import { Position as PositionType, TenureAtCompany } from "../types";
import { parseExperiences } from "../util/parseExperiences";
import { Tenure } from "./Tenure";

type SectionProps = {
  title: string;
  positions: PositionType[];
};

export const Section = ({ title, positions }: SectionProps) => {
  const experiences = parseExperiences(positions);

  return (
    <section>
      <h2 className="text-xs mb-6 text-gray-500">{title}</h2>
      {experiences.map((tenure: TenureAtCompany, i) => (
        <Tenure key={`tenure-${i}-${tenure.name}`} tenure={tenure} />
      ))}
    </section>
  );
};
