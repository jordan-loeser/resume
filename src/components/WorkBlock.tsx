import { ContentBlock } from "../bits/ContentBlock";
import { WorkPosition } from "../types";
import { parseDateRange } from "../util/parseDates";

const getSubtitle = (position: WorkPosition) => {
  const dateRange = parseDateRange(position.startDate, position.endDate);
  if (!position.location) return dateRange;
  return `${dateRange} (${position.location})`;
};

export const WorkBlock = ({ position }: { position: WorkPosition }) => {
  return (
    <ContentBlock
      title={position.position}
      subtitle={getSubtitle(position)}
      body={position.summary}
    />
  );
};
