import { ContentBlock } from "../components/ContentBlock";
import { Work } from "../types";
import { parseDateRange } from "../util/parseDates";

const getSubtitle = (position: Work) => {
  const dateRange = parseDateRange(position.startDate, position.endDate);
  if (!position.location) return dateRange;
  return `${dateRange} (${position.location})`;
};

export const WorkBlock = ({ position }: { position: Work }) => {
  return (
    <ContentBlock
      title={position.position}
      subtitle={getSubtitle(position)}
      body={position.summary}
      bullets={position.highlights}
    />
  );
};
