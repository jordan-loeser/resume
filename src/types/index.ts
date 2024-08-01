import { ResumeSchema } from "@kurone-kito/jsonresume-types";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type WorkPosition = ArrayElement<Required<ResumeSchema>["work"]>;

export type VolunteerPosition = ArrayElement<
  Required<ResumeSchema>["volunteer"]
>;

export type Position = WorkPosition | VolunteerPosition;

export type TenureAtCompany = {
  name: string;
  positions: Position[];
};
