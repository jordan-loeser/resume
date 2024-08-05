import { GroupOfExperiences as GroupOfExperiencesType } from "../types";
import { Experience } from "./Experience";

export const GroupOfExperiences = ({
  group,
}: {
  group: GroupOfExperiencesType;
}) => {
  const hasEntity = "entity" in group;

  return (
    <article className="mb-6 grid grid-cols-4 gap-3">
      {hasEntity && (
        <div className="col-span-1">
          <h3 className="text-sm font-bold leading-5">{group.entity}</h3>
        </div>
      )}
      <div className={`col-span-${hasEntity ? "3" : "full"}`}>
        {group.experiences.map((experience, i) => (
          <Experience
            key={`experience-${i}-${experience.title}`}
            experience={experience}
          />
        ))}
      </div>
    </article>
  );
};
