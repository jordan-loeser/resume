import { Iso8601 } from "@kurone-kito/jsonresume-types";
import { Position } from "../types";

type Options = { showMonth?: boolean };

const getDateTimeFormatOptions = (
  options: Options
): Intl.DateTimeFormatOptions => ({
  year: "numeric",
  month: options?.showMonth ? "short" : undefined,
});

export const parseStartDate = (
  date: Position["startDate"],
  options: Options = {}
): string => {
  if (!date) return "";
  const startDate = new Date(date);
  return startDate.toLocaleDateString(
    "en-US",
    getDateTimeFormatOptions(options)
  );
};

export const parseEndDate = (
  date: Position["endDate"],
  options: Options = {}
): string => {
  if (!date) return "Present";
  const endDate = new Date(date);
  return endDate.toLocaleDateString("en-US", getDateTimeFormatOptions(options));
};

export const parseDateRange = (
  startDate: Position["startDate"],
  endDate: Position["endDate"],
  options: Options = {}
): string => {
  const parsedStart = parseStartDate(startDate, options);
  const parsedEnd = parseEndDate(endDate, options);

  if (parsedStart === parsedEnd) return parsedEnd;

  return `${parsedStart} - ${parsedEnd}`;
};
