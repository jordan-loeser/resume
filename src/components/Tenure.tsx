import { TenureAtCompany } from "../types";
import { Position } from "./Position";

export const Tenure = ({ tenure }: { tenure: TenureAtCompany }) => {
  return (
    <article className="mb-6 grid grid-cols-4 gap-3">
      <div className="col-span-1">
        <h3 className="text-lg font-bold leading-5">{tenure.name}</h3>
      </div>
      <div className="col-span-3">
        {tenure.positions.map((position, i) => (
          <Position
            key={`experience-${i}-${position.position}`}
            position={position}
          />
        ))}
      </div>
    </article>
  );
};
