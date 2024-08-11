import { ResumeSchema } from "@kurone-kito/jsonresume-types";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Work = ArrayElement<Required<ResumeSchema>["work"]>;

export type Volunteer = ArrayElement<Required<ResumeSchema>["volunteer"]>;

export type Education = ArrayElement<Required<ResumeSchema>["education"]>;

export type Skill = ArrayElement<Required<ResumeSchema>["skills"]>;
