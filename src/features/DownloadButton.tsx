import { Button } from "../components";
import { DownloadIcon } from "../components/icons";

export const DownloadButton = () => (
  <Button
    icon={<DownloadIcon />}
    description="Download PDF"
    onClick={() => window.print()}
  />
);
