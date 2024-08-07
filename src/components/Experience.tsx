import Balancer from "react-wrap-balancer";
import { Experience as ExperienceType } from "../types";
import { parseDateRange } from "../util/parseDates";

export const Experience = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div className="mb-2">
      <hgroup className="mb-1">
        <h4 className="text-md">{experience.title}</h4>
        {experience.subtitle && (
          <h5 className="text-sm text-gray-500">
            <Balancer>{experience.subtitle}</Balancer>
          </h5>
        )}
        <h5 className="text-sm text-gray-500">
          {parseDateRange(experience.startDate, experience.endDate)}
          {experience.location && <> ({experience.location})</>}
        </h5>
      </hgroup>
      {experience.summary && (
        <p className="text-sm font-light leading-4 mb-4">
          <Balancer>{experience.summary}</Balancer>
        </p>
      )}
    </div>
  );
};
