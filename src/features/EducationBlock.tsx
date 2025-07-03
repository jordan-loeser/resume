import { ContentBlock } from "../components/ContentBlock";
import { Education } from "../types";
import { parseDateRange } from "../util/parseDates";

const getSubtitle = (experience: Education) => {
  if (!experience.studyType && !experience.area) return undefined;
  if (experience.studyType && !experience.area) return experience.studyType;
  if (!experience.studyType && experience.area) return experience.area;
  return `${experience.studyType} in ${experience.area}`;
};

export const EducationBlock = ({ experience }: { experience: Education }) => {
  return (
    <ContentBlock
      title={experience.institution}
      subtitle={parseDateRange(experience.startDate, experience.endDate)}
      body={getSubtitle(experience)}
      smallBody={experience.courses?.join(", ")}
    />
  );
};
