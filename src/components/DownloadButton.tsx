import { Button } from "../features";
import { DownloadIcon } from "../features/icons";

export const DownloadButton = () => (
  <Button
    icon={<DownloadIcon />}
    description="Download PDF"
    onClick={() => window.print()}
  />
);
