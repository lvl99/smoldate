/**
 * General date & time functions.
 */
import padStart from "lodash/padStart";
import isString from "lodash/isString";
import isNumber from "lodash/isNumber";
import isEmpty from "lodash/isEmpty";

export interface YearMonthDay {
  day: number;
  month: number;
  year: number;
}

export type AcceptedDate = Date | Partial<YearMonthDay> | string | number;

export const LENGTH_OF_DAY = 1000 * 60 * 60 * 24;

export const MONTHS_WITH_30_DAYS = [4, 6, 9, 11];

export const RE_VALID_DATE_STRING = /^(?:\d|\d{4})\-\d{1,2}\-\d{1,2}/;

/**
 * Get the number of days in the specified month.
 */
export function daysInMonth(year: number, month: number): number {
  let days = 31;

  if (!year) {
    // February
    if (month === 2) {
      days = 29;
    }
    // Months with 30 days
    else if (MONTHS_WITH_30_DAYS.includes(month)) {
      days = 30;
    }
  } else {
    days = new Date(Date.UTC(year, month, 0)).getUTCDate();
  }

  return days;
}

/**
 * Convert a string to a YearMonthDay object.
 */
export function convertStringToYearMonthDay(
  dateString: string | null | undefined
): YearMonthDay {
  if (isEmpty(dateString)) {
    return {
      year: 0,
      month: 0,
      day: 0
    };
  }

  if (!RE_VALID_DATE_STRING.test(String(dateString))) {
    throw new Error(
      "Invalid date string given. Must match Y-MM-DD or YYYY-MM-DD format."
    );
  }

  const [year, month, day] = String(dateString)
    .split("-")
    .slice(0, 3)
    .map(parseFloat);

  return {
    year,
    month,
    day
  };
}

/**
 * Convert a YearMonthDay object to a Date object.
 */
export function convertYearMonthDayToDate({
  year,
  month,
  day
}: YearMonthDay): Date {
  // Here be problems due to timezone
  // const date = new Date();
  // date.setUTCFullYear(year);
  // date.setUTCMonth(month ? month - 1 : 0);
  // date.setUTCDate(day);
  // date.setUTCHours(0);
  // date.setUTCMinutes(0);
  // date.setUTCSeconds(0);
  // date.setUTCMilliseconds(0);

  // This be the most reliable, yarrr
  const date = new Date(
    `${padStart(`${year}`, 4, "0")}-${padStart(`${month}`, 2, "0")}-${padStart(
      `${day}`,
      2,
      "0"
    )}T00:00:00.000Z`
  );
  return date;
}

/**
 * Convert any supported date type into a YearMonthDay object.
 */
export function convertDateToYearMonthDay(date: AcceptedDate): YearMonthDay {
  let _date: YearMonthDay = {
    year: 0,
    month: 0,
    day: 0
  };

  // Date
  if (date instanceof Date) {
    _date.year = date.getUTCFullYear();
    _date.month = date.getUTCMonth() + 1;
    _date.day = date.getUTCDate();
  }
  // Date string
  else if (isString(date)) {
    _date = convertStringToYearMonthDay(String(date));
  }
  // Date in milliseconds from Unix epoch
  else if (isNumber(date)) {
    const _convertedDate = new Date();
    _convertedDate.setTime(Number(date));
    _date.year = _convertedDate.getUTCFullYear();
    _date.month = _convertedDate.getUTCMonth() + 1;
    _date.day = _convertedDate.getUTCDate();
  }
  // YearMonthDay object
  else {
    _date = { ...(date as YearMonthDay) };
  }

  return _date;
}

/**
 * Convert any accepted date into a string.
 */
export function convertDateToString(date: AcceptedDate): string {
  let _date = convertDateToYearMonthDay(date);

  if (!_date.year && !_date.month && !_date.day) {
    return "";
  }

  return [
    padStart(`${_date.year}`, 4, "0"),
    padStart(`${_date.month}`, 2, "0"),
    padStart(`${_date.day}`, 2, "0")
  ].join("-");
}

/**
 * Get the Date version of an accepted date.
 */
export function getDateObject(date: AcceptedDate): Date {
  // Already Date
  if (date instanceof Date) {
    return date;
  }
  // String
  else if (isString(date)) {
    return new Date(String(date));
  }
  // Number
  else if (isNumber(date)) {
    return new Date(Number(date));
  }
  // YearMonthDay
  else {
    return convertYearMonthDayToDate(date as YearMonthDay);
  }
}

/**
 * Adjust a date by a certain amount of days and return as a Date object.
 */
export function adjustDateByDays(date: AcceptedDate, numDays: number): Date {
  const _date = getDateObject(date);
  return new Date(_date.getTime() + numDays * LENGTH_OF_DAY);
}

/**
 * Adjust a date by a certain amount of days and return as a date string.
 */
export function adjustDateByDaysToString(
  date: AcceptedDate,
  numDays: number
): string {
  return convertDateToString(adjustDateByDays(date, numDays));
}

/**
 * Adjust a date by a certain amount of days and return as a YearMonthDay object.
 */
export function adjustDateByDaysToYearMonthDay(
  date: AcceptedDate,
  numDays: number
): YearMonthDay {
  return convertDateToYearMonthDay(adjustDateByDays(date, numDays));
}

/**
 * Get the age in years from a specific date.
 *
 * Adapted from: https://stackoverflow.com/a/7091965/1421162
 */
export function getAge(date: AcceptedDate): number {
  let today = new Date();
  let birthday = getDateObject(date);
  let age = today.getUTCFullYear() - birthday.getUTCFullYear();
  let m = today.getUTCMonth() - birthday.getUTCMonth();
  if (m < 0 || (m === 0 && today.getUTCDate() < birthday.getUTCDate())) {
    age--;
  }
  return age;
}

/**
 * Validate the birthday's date against a minimum age.
 */
export function validateAge(date: AcceptedDate, minimumAge = 16) {
  let _date = convertDateToYearMonthDay(date);
  let _ageDate = convertYearMonthDayToDate({
    day: _date.day,
    month: _date.month,
    // Defaults to the current year minus the minimum age +1 if the year was not given
    year: _date.year || new Date().getUTCFullYear() - (minimumAge + 1)
  });
  return getAge(_ageDate) >= minimumAge;
}
