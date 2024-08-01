import Balancer from "react-wrap-balancer";
import { Position as PositionType } from "../types";
import { parseDateRange } from "../util/parseDates";

export const Position = ({ position }: { position: PositionType }) => {
  const { position: jobTitle, summary } = position;

  return (
    <div className="mb-4">
      <hgroup className="mb-1">
        <h4 className="text-md">{jobTitle}</h4>
        <h5 className="text-xs text-gray-500">
          {parseDateRange(position.startDate, position.endDate)} (
          {position.location})
        </h5>
      </hgroup>
      {summary && (
        <p className="text-sm font-light leading-4">
          <Balancer>{summary}</Balancer>
        </p>
      )}
    </div>
  );
};
