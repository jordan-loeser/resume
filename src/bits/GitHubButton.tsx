import { Button } from "../features";
import { GitHubIcon } from "../features/icons";

export const GitHubButton = () => (
  <Button
    icon={<GitHubIcon />}
    description="See code on GitHub"
    onClick={() => window.open("https://github.com/jordan-loeser/resume")}
  />
);
