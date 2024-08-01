import { Position } from "../types";

export const parseDateRange = (
  position: Position,
  options?: { showMonth: boolean }
): string => {
  const dateTimeFormatOptions = {
    year: "numeric",
    month: options?.showMonth ? "short" : undefined,
  } as Intl.DateTimeFormatOptions;

  const startDate = new Date(position.startDate!);
  const endDate = position.endDate ? new Date(position.endDate) : undefined;

  const start = startDate.toLocaleDateString("en-US", dateTimeFormatOptions);
  const end = endDate
    ? endDate
        .toLocaleDateString("en-US", dateTimeFormatOptions)
        .replace(/\b\d{2}\b/g, "'$&")
    : "Present";

  return `${start} - ${end}`;
};
