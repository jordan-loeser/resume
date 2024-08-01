import { ResumeSchema } from "@kurone-kito/jsonresume-types";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Position = ArrayElement<Required<ResumeSchema>["work"]>;

export type TenureAtCompany = {
  name: Position["name"];
  positions: Position[];
};
