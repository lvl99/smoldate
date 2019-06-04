export interface YearMonthDay {
    day: number;
    month: number;
    year: number;
}
export declare type AcceptedDate = Date | Partial<YearMonthDay> | string | number;
export declare const LENGTH_OF_DAY: number;
export declare const MONTHS_WITH_30_DAYS: number[];
export declare const RE_VALID_DATE_STRING: RegExp;
/**
 * Get the number of days in the specified month.
 */
export declare function daysInMonth(year: number, month: number): number;
/**
 * Convert a string to a YearMonthDay object.
 */
export declare function convertStringToYearMonthDay(dateString: string | null | undefined): YearMonthDay;
/**
 * Convert a YearMonthDay object to a Date object.
 */
export declare function convertYearMonthDayToDate({ year, month, day }: YearMonthDay): Date;
/**
 * Convert any supported date type into a YearMonthDay object.
 */
export declare function convertDateToYearMonthDay(date: AcceptedDate): YearMonthDay;
/**
 * Convert any accepted date into a string.
 */
export declare function convertDateToString(date: AcceptedDate): string;
/**
 * Get the Date version of an accepted date.
 */
export declare function getDateObject(date: AcceptedDate): Date;
/**
 * Adjust a date by a certain amount of days and return as a Date object.
 */
export declare function adjustDateByDays(date: AcceptedDate, numDays: number): Date;
/**
 * Adjust a date by a certain amount of days and return as a date string.
 */
export declare function adjustDateByDaysToString(date: AcceptedDate, numDays: number): string;
/**
 * Adjust a date by a certain amount of days and return as a YearMonthDay object.
 */
export declare function adjustDateByDaysToYearMonthDay(date: AcceptedDate, numDays: number): YearMonthDay;
/**
 * Get the age in years from a specific date.
 *
 * Adapted from: https://stackoverflow.com/a/7091965/1421162
 */
export declare function getAge(date: AcceptedDate): number;
/**
 * Validate the birthday's date against a minimum age.
 */
export declare function validateAge(date: AcceptedDate, minimumAge?: number): boolean;
