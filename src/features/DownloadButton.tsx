import { Button } from "../components";
import { DownloadIcon } from "../components/icons";

export const DownloadButton = () => (
  <Button
    icon={<DownloadIcon />}
    description="Download PDF"
    onClick={() => window.open("/Jordan_Loeser_Resume.pdf", "_self")}
  />
);
