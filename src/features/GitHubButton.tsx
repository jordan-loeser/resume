import { Button } from "../components";
import { GitHubIcon } from "../components/icons";

export const GitHubButton = () => (
  <Button
    icon={<GitHubIcon />}
    description="See code on GitHub"
    onClick={() => window.open("https://github.com/jordan-loeser/resume")}
  />
);
