import { GroupOfExperiences, Experience } from "../types";

/**
 *  Assumptions:
 * - All experiences at the same company are adjascent
 * - Experiences.work are sorted by date
 * */

export const groupConsecutiveExperiences = (
  experiences: Experience[]
): Array<GroupOfExperiences> => {
  if (experiences.length <= 0) return [];

  const groups: GroupOfExperiences[] = [];

  let curGroup: GroupOfExperiences = {
    entity: experiences[0].entity!,
    experiences: [],
  };

  let i = 0;
  while (i < experiences.length) {
    const curExperience = experiences[i];
    if (curExperience.entity === curGroup.entity) {
      // Continue previous group
      curGroup.experiences.push(curExperience);
    } else {
      // Start a new group
      groups.push(curGroup);
      curGroup = {
        entity: curExperience.entity,
        experiences: [curExperience],
      };
    }
    i += 1;
  }
  groups.push(curGroup);

  return groups;
};
