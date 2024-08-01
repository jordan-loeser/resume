import {
  Position,
  TenureAtCompany,
  VolunteerPosition,
  WorkPosition,
} from "../types";

/**
 *  Assumptions:
 * - All experiences at the same company are adjascent
 * - Experiences.work are sorted by date
 * */

export const parseExperiences = (
  positions: Position[]
): Array<TenureAtCompany> => {
  if (positions.length <= 0) return [];

  const tenures: TenureAtCompany[] = [];

  let curTenure: TenureAtCompany = {
    name:
      (positions[0] as WorkPosition).name! ||
      (positions[0] as VolunteerPosition).organization!,
    positions: [],
  };

  let i = 0;
  while (i < positions.length) {
    // Assumption: title and company are always present
    const curPosition: Position = positions[i];
    const curName =
      (curPosition as WorkPosition).name! ||
      (curPosition as VolunteerPosition).organization!;

    if (curName === curTenure.name) {
      curTenure.positions.push(curPosition);
    } else {
      tenures.push(curTenure);
      curTenure = {
        name: curName,
        positions: [curPosition],
      };
    }
    i += 1;
  }
  tenures.push(curTenure);

  return tenures;
};
