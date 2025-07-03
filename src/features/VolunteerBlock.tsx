import { ContentBlock } from "../components/ContentBlock";
import { Volunteer } from "../types";
import { parseDateRange } from "../util/parseDates";

const getSubtitle = (position: Volunteer) => {
  const dateRange = parseDateRange(position.startDate, position.endDate);
  if (!position.location) return dateRange;
  return `${dateRange} (${position.location})`;
};

export const VolunteerBlock = ({ position }: { position: Volunteer }) => {
  return (
    <ContentBlock
      title={`${position.position} at ${position.organization}`}
      subtitle={getSubtitle(position)}
      smallBody={position.summary}
    />
  );
};
