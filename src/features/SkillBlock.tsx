import { ContentBlock } from "../components/ContentBlock";
import { Skill } from "../types";

type SkillsBlockProps = {
  keyword: string;
  skills: Skill[];
};
export const SkillsBlock = ({ keyword, skills }: SkillsBlockProps) => {
  return (
    <ContentBlock
      title={keyword}
      smallBody={skills.map((skill) => skill.name).join(", ")}
      useBalancer={false}
    />
  );
};
