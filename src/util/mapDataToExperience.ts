import {
  EducationalExperience,
  Experience,
  VolunteerPosition,
  WorkPosition,
} from "../types";

export const workPositionToExperience = (
  position: WorkPosition
): Experience => ({
  entity: position.name!,
  title: position.position!,
  startDate: position.startDate,
  endDate: position.endDate,
  summary: position.summary,
  location: position.location,
});

export const volunteerPositionToExperience = (
  position: VolunteerPosition
): Experience => ({
  entity: position.organization!,
  title: position.position!,
  startDate: position.startDate,
  endDate: position.endDate,
  summary: position.summary,
});

export const educationToExperience = (
  experience: EducationalExperience
): Experience => ({
  entity: experience.institution!,
  title: experience.institution!,
  subtitle:
    experience.studyType +
    (experience.studyType && experience.area ? ` in ` : "") +
    experience.area,
  startDate: experience.startDate,
  endDate: experience.endDate,
});
