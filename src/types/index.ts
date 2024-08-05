import { ResumeSchema } from "@kurone-kito/jsonresume-types";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type WorkPosition = ArrayElement<Required<ResumeSchema>["work"]>;

export type VolunteerPosition = ArrayElement<
  Required<ResumeSchema>["volunteer"]
>;

export type EducationalExperience = ArrayElement<
  Required<ResumeSchema>["education"]
>;

export type Position = WorkPosition | VolunteerPosition | EducationalExperience;

export type Experience = {
  entity: string;
  title: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  location?: string;
};

export type GroupOfExperiences = {
  entity: string;
  experiences: Experience[];
};
