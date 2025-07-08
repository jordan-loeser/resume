/**
 *  Assumptions:
 * - All experiences at the same company are adjascent
 * - Experiences.work are sorted by date
 * */

export function groupConsecutivePositionsByKey<T>(
  positions: T[],
  key: keyof T,
): Array<T[]> {
  if (positions.length <= 0) return [];

  const groups: T[][] = [];

  let i = 1;
  let curGroup: T[] = [positions[0]];
  while (i < positions.length) {
    const curExperience = positions[i];
    if (curExperience[key] === curGroup[0][key]) {
      // Continue previous group
      curGroup.push(curExperience);
    } else {
      // Start a new group
      groups.push(curGroup);
      curGroup = [curExperience];
    }
    i += 1;
  }
  groups.push(curGroup);

  return groups;
}
