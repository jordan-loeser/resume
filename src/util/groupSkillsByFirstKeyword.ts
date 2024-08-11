import { Skill } from "../types";

export const groupSkillsByFirstKeyword = (
  skills: Skill[]
): Record<string, Skill[]> =>
  skills.reduce((acc, skill) => {
    const keyword =
      skill.keywords && skill.keywords.length > 0 ? skill.keywords[0] : "Other";
    if (!acc[keyword]) acc[keyword] = [];
    acc[keyword].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
