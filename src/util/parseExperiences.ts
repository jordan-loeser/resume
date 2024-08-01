import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { Position, TenureAtCompany } from "../types";

/**
 *  Assumptions:
 * - All experiences at the same company are adjascent
 * - Experiences.work are sorted by date
 * */

export const parseExperiences = (
  resumeJson: ResumeSchema
): Array<TenureAtCompany> => {
  if (!resumeJson.work || resumeJson.work.length <= 0) return [];

  const tenures: TenureAtCompany[] = [];

  let curTenure: TenureAtCompany = {
    name: resumeJson.work[0].name!,
    positions: [],
  };

  let i = 0;
  while (i < resumeJson.work.length) {
    // Assumption: title and company are always present
    const curPosition: Position = resumeJson.work[i];
    if (curPosition.name === curTenure.name) {
      curTenure.positions.push(curPosition);
    } else {
      tenures.push(curTenure);
      curTenure = {
        name: curPosition.name!,
        positions: [curPosition],
      };
    }
    i += 1;
  }
  tenures.push(curTenure);

  return tenures;
};
