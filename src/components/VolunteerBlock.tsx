import { ContentBlock } from "../bits/ContentBlock";
import { VolunteerPosition } from "../types";
import { parseDateRange } from "../util/parseDates";

const getSubtitle = (position: VolunteerPosition) => {
  const dateRange = parseDateRange(position.startDate, position.endDate);
  if (!position.location) return dateRange;
  return `${dateRange} (${position.location})`;
};

export const VolunteerBlock = ({
  position,
}: {
  position: VolunteerPosition;
}) => {
  return (
    <ContentBlock
      title={position.position}
      subtitle={getSubtitle(position)}
      body={position.summary}
    />
  );
};
