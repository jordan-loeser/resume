import { ContentBlock } from "../bits/ContentBlock";
import { Skill } from "../types";

type SkillsBlockProps = {
  keyword: string;
  skills: Skill[];
};
export const SkillsBlock = ({ keyword, skills }: SkillsBlockProps) => {
  return (
    <ContentBlock
      title={keyword}
      subtitle={skills.map((skill) => skill.name).join(", ")}
      useBalancer={false}
    />
  );
};
