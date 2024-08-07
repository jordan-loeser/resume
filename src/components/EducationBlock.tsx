import { ContentBlock } from "../bits/ContentBlock";
import { EducationalExperience } from "../types";
import { parseDateRange } from "../util/parseDates";

const getSubtitle = (experience: EducationalExperience) => {
  if (experience.studyType && !experience.area) return experience.studyType;
  if (!experience.studyType && experience.area) return experience.area;
  return `${experience.studyType} in ${experience.area}`;
};

export const EducationBlock = ({
  experience,
}: {
  experience: EducationalExperience;
}) => {
  return (
    <ContentBlock
      title={experience.institution}
      subtitle={getSubtitle(experience)}
      subtitle2={parseDateRange(experience.startDate, experience.endDate)}
    />
  );
};
