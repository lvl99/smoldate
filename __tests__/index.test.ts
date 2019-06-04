import * as dateTime from "../";

describe("dateTime#daysInMonth", () => {
  it("should return 31 if no valid year or month was set", () => {
    expect(dateTime.daysInMonth(0, 0)).toBe(31);
  });

  it("should correctly return total number of days in months that have 31 days", () => {
    expect(dateTime.daysInMonth(2000, 1)).toBe(31);
    expect(dateTime.daysInMonth(2000, 3)).toBe(31);
    expect(dateTime.daysInMonth(2000, 5)).toBe(31);
    expect(dateTime.daysInMonth(2000, 7)).toBe(31);
    expect(dateTime.daysInMonth(2000, 8)).toBe(31);
    expect(dateTime.daysInMonth(2000, 10)).toBe(31);
    expect(dateTime.daysInMonth(2000, 12)).toBe(31);
  });

  it("should correctly return total number of days in months that have 30 days", () => {
    expect(dateTime.daysInMonth(2000, 4)).toBe(30);
    expect(dateTime.daysInMonth(2000, 6)).toBe(30);
    expect(dateTime.daysInMonth(2000, 9)).toBe(30);
    expect(dateTime.daysInMonth(2000, 11)).toBe(30);
  });

  it("should correctly return 28 days for February in non-leap years", () => {
    expect(dateTime.daysInMonth(2023, 2)).toBe(28);
    expect(dateTime.daysInMonth(2022, 2)).toBe(28);
    expect(dateTime.daysInMonth(2021, 2)).toBe(28);
    expect(dateTime.daysInMonth(2019, 2)).toBe(28);
    expect(dateTime.daysInMonth(2018, 2)).toBe(28);
    expect(dateTime.daysInMonth(2017, 2)).toBe(28);
    expect(dateTime.daysInMonth(2015, 2)).toBe(28);
    expect(dateTime.daysInMonth(2014, 2)).toBe(28);
    expect(dateTime.daysInMonth(2013, 2)).toBe(28);
  });

  it("should correctly return 29 days for February in leap years", () => {
    expect(dateTime.daysInMonth(2024, 2)).toBe(29);
    expect(dateTime.daysInMonth(2020, 2)).toBe(29);
    expect(dateTime.daysInMonth(2016, 2)).toBe(29);
    expect(dateTime.daysInMonth(2012, 2)).toBe(29);
    expect(dateTime.daysInMonth(2008, 2)).toBe(29);
    expect(dateTime.daysInMonth(2004, 2)).toBe(29);
    expect(dateTime.daysInMonth(2000, 2)).toBe(29);
    expect(dateTime.daysInMonth(1996, 2)).toBe(29);
    expect(dateTime.daysInMonth(1992, 2)).toBe(29);
    expect(dateTime.daysInMonth(1988, 2)).toBe(29);
  });
});

describe("dateTime#convertStringToYearMonthDay", () => {
  it("should convert empty string/non-string values to a zero YearMonthDay object", () => {
    const ymdZero = {
      year: 0,
      month: 0,
      day: 0
    };
    expect(dateTime.convertStringToYearMonthDay("")).toMatchObject(ymdZero);
    expect(dateTime.convertStringToYearMonthDay(null)).toMatchObject(ymdZero);
    expect(dateTime.convertStringToYearMonthDay(undefined)).toMatchObject(
      ymdZero
    );
  });

  it("should convert string 0-0-0 to a YearMonthDay object", () => {
    const ymd = dateTime.convertStringToYearMonthDay("0-0-0");
    expect(ymd).toMatchObject({
      year: 0,
      month: 0,
      day: 0
    });
  });

  it("should convert a string YYYY-MM-DD to a YearMonthDay object", () => {
    const ymd = dateTime.convertStringToYearMonthDay("2000-02-29");
    expect(ymd).toMatchObject({
      year: 2000,
      month: 2,
      day: 29
    });
  });

  it("should convert a string Y-MM-DD to a YearMonthDay object", () => {
    const ymd = dateTime.convertStringToYearMonthDay("4-02-29");
    expect(ymd).toMatchObject({
      year: 4,
      month: 2,
      day: 29
    });
  });

  it("should convert an ISO date string to a YearMonthDay object", () => {
    const ymd = dateTime.convertStringToYearMonthDay(
      new Date("2000-02-29").toISOString()
    );
    expect(ymd).toMatchObject({
      year: 2000,
      month: 2,
      day: 29
    });
  });

  it("should fail on non-supported date strings", () => {
    expect(() => {
      dateTime.convertStringToYearMonthDay("not a date string");
    }).toThrow();
    expect(() => {
      // Missing full year
      dateTime.convertStringToYearMonthDay("98-02-28");
    }).toThrow();
    expect(() => {
      dateTime.convertStringToYearMonthDay(
        new Date("2000-02-29").toDateString()
      );
    }).toThrow();
    expect(() => {
      dateTime.convertStringToYearMonthDay(
        new Date("2000-02-29").toUTCString()
      );
    }).toThrow();
  });
});

describe("dateTime#convertYearMonthDayToDate", () => {
  it("should convert a YearMonthDay object to a Date", () => {
    const date = dateTime.convertYearMonthDayToDate({
      year: 2000,
      month: 2,
      day: 29
    });
    expect(date.getUTCFullYear()).toBe(2000);
    expect(date.getUTCMonth()).toBe(1);
    expect(date.getUTCDate()).toBe(29);
    expect(date.getUTCHours()).toBe(0);
    expect(date.getUTCMinutes()).toBe(0);
    expect(date.getUTCSeconds()).toBe(0);
  });

  it("should convert a YearMonthDay object that has zero for any value to a Date object", () => {
    const dateZero = dateTime.convertYearMonthDayToDate({
      year: 0,
      month: 0,
      day: 0
    });
    expect(dateZero.getUTCFullYear()).toBe(0);
    expect(dateZero.getUTCMonth()).toBe(0);
    expect(dateZero.getUTCDate()).toBe(1);

    const dateYearZero = dateTime.convertYearMonthDayToDate({
      year: 0,
      month: 2,
      day: 29
    });
    expect(dateYearZero.getUTCFullYear()).toBe(0);
    expect(dateYearZero.getUTCMonth()).toBe(1);
    expect(dateYearZero.getUTCDate()).toBe(29);

    const dateMonthZero = dateTime.convertYearMonthDayToDate({
      year: 2000,
      month: 0,
      day: 29
    });
    expect(dateMonthZero.getFullYear()).toBe(2000);
    expect(dateMonthZero.getMonth()).toBe(0);
    expect(dateMonthZero.getDate()).toBe(29);

    const dateDayZero = dateTime.convertYearMonthDayToDate({
      year: 2000,
      month: 2,
      day: 0
    });
    expect(dateDayZero.getUTCFullYear()).toBe(2000);
    expect(dateDayZero.getUTCMonth()).toBe(1);
    expect(dateDayZero.getUTCDate()).toBe(1);
  });
});

describe("dateTime#convertDateToYearMonthDay", () => {
  it("should convert date string to YearMonthDay object", () => {
    expect(dateTime.convertDateToYearMonthDay("2000-02-29")).toMatchObject({
      year: 2000,
      month: 2,
      day: 29
    });
  });

  it("should convert date number to YearMonthDay object", () => {
    expect(dateTime.convertDateToYearMonthDay(951782400000)).toMatchObject({
      year: 2000,
      month: 2,
      day: 29
    });
  });

  it("should convert Date object to YearMonthDay object", () => {
    expect(
      dateTime.convertDateToYearMonthDay(new Date("2000-02-29"))
    ).toMatchObject({
      year: 2000,
      month: 2,
      day: 29
    });
  });

  it("should not convert YearMonthDay object but output same referenced object", () => {
    const ymd = {
      year: 2000,
      month: 2,
      day: 29
    };
    expect(dateTime.convertDateToYearMonthDay(ymd)).toStrictEqual(ymd);
  });
});

describe("dateTime#convertDateToString", () => {
  it("should convert date string to string", () => {
    expect(dateTime.convertDateToString("2000-02-29")).toBe("2000-02-29");
  });

  it("should convert date number to string", () => {
    expect(dateTime.convertDateToString(951782400000)).toBe("2000-02-29");
  });

  it("should convert Date object to string", () => {
    expect(dateTime.convertDateToString(new Date("2000-02-29"))).toBe(
      "2000-02-29"
    );
  });

  it("should convert YearMonthDay object to string", () => {
    expect(
      dateTime.convertDateToString({
        year: 2000,
        month: 2,
        day: 29
      })
    ).toBe("2000-02-29");
  });
});

describe("dateTime#getDateObject", () => {
  it("should get the date string as a Date object", () => {
    const date = dateTime.getDateObject("2000-02-29");
    expect(date).toBeInstanceOf(Date);
    expect(date.getUTCFullYear()).toBe(2000);
    expect(date.getUTCMonth()).toBe(1);
    expect(date.getUTCDate()).toBe(29);
  });

  it("should get the date number as a Date object", () => {
    const date = dateTime.getDateObject(951782400000);
    expect(date).toBeInstanceOf(Date);
    expect(date.getUTCFullYear()).toBe(2000);
    expect(date.getUTCMonth()).toBe(1);
    expect(date.getUTCDate()).toBe(29);
  });

  it("should get the YearMonthDay object as a Date object", () => {
    const date = dateTime.getDateObject({ year: 2000, month: 2, day: 29 });
    expect(date).toBeInstanceOf(Date);
    expect(date.getUTCFullYear()).toBe(2000);
    expect(date.getUTCMonth()).toBe(1);
    expect(date.getUTCDate()).toBe(29);
  });
});

describe("dateTime#adjustDateByDays", () => {
  const offsetDays = -5;

  const today = new Date();
  const todayDateString = dateTime.convertDateToString(today);
  const todayDateNumber = today.getTime();
  const todayYmd = dateTime.convertDateToYearMonthDay(today);

  const adjustedDate = new Date(
    today.getTime() + offsetDays * dateTime.LENGTH_OF_DAY
  );

  it("should adjust the given Date object and return a Date object", () => {
    const testAdjustedDate = dateTime.adjustDateByDays(today, offsetDays);
    expect(testAdjustedDate).toBeInstanceOf(Date);
    expect(testAdjustedDate.getUTCFullYear()).toBe(
      adjustedDate.getUTCFullYear()
    );
    expect(testAdjustedDate.getUTCMonth()).toBe(adjustedDate.getUTCMonth());
    expect(testAdjustedDate.getUTCDate()).toBe(adjustedDate.getUTCDate());
  });

  it("should adjust the given date string and return a Date object", () => {
    const testAdjustedDate = dateTime.adjustDateByDays(
      todayDateString,
      offsetDays
    );
    expect(testAdjustedDate).toBeInstanceOf(Date);
    expect(testAdjustedDate.getUTCFullYear()).toBe(
      adjustedDate.getUTCFullYear()
    );
    expect(testAdjustedDate.getUTCMonth()).toBe(adjustedDate.getUTCMonth());
    expect(testAdjustedDate.getUTCDate()).toBe(adjustedDate.getUTCDate());
  });

  it("should adjust the given date number and return a Date object", () => {
    const testAdjustedDate = dateTime.adjustDateByDays(
      todayDateNumber,
      offsetDays
    );
    expect(testAdjustedDate).toBeInstanceOf(Date);
    expect(testAdjustedDate.getUTCFullYear()).toBe(
      adjustedDate.getUTCFullYear()
    );
    expect(testAdjustedDate.getUTCMonth()).toBe(adjustedDate.getUTCMonth());
    expect(testAdjustedDate.getUTCDate()).toBe(adjustedDate.getUTCDate());
  });

  it("should adjust the given YearMonthDay object and return a Date object", () => {
    const testAdjustedDate = dateTime.adjustDateByDays(todayYmd, offsetDays);
    expect(testAdjustedDate).toBeInstanceOf(Date);
    expect(testAdjustedDate.getUTCFullYear()).toBe(
      adjustedDate.getUTCFullYear()
    );
    expect(testAdjustedDate.getUTCMonth()).toBe(adjustedDate.getUTCMonth());
    expect(testAdjustedDate.getUTCDate()).toBe(adjustedDate.getUTCDate());
  });
});

describe("dateTime#adjustDateByDaysToString", () => {
  it("should adjust date and return as date string", () => {
    expect(dateTime.adjustDateByDaysToString("2000-02-29", -5)).toBe(
      "2000-02-24"
    );
    expect(dateTime.adjustDateByDaysToString("2000-01-01", -5)).toBe(
      "1999-12-27"
    );
  });
});

describe("dateTime#adjustDateByDaysToYearMonthDay", () => {
  it("should adjust date and return as YearMonthDay object", () => {
    expect(
      dateTime.adjustDateByDaysToYearMonthDay("2000-02-29", -5)
    ).toMatchObject({
      year: 2000,
      month: 2,
      day: 24
    });
    expect(
      dateTime.adjustDateByDaysToYearMonthDay("2000-01-01", -5)
    ).toMatchObject({
      year: 1999,
      month: 12,
      day: 27
    });
  });
});

describe("dateTime#getAge", () => {
  const dob = new Date();
  dob.setFullYear(dob.getUTCFullYear() - 16);

  const dobString = dateTime.convertDateToString(dob);
  const dobNumber = dob.getTime();
  const dobYmd = dateTime.convertDateToYearMonthDay(dob);

  it("should get the age based on a Date object", () => {
    expect(dateTime.getAge(dob)).toBe(16);

    const dob40 = new Date();
    dob40.setFullYear(dob40.getUTCFullYear() - 40);
    expect(dateTime.getAge(dob40)).toBe(40);
  });

  it("should get the age based on a date string", () => {
    expect(dateTime.getAge(dobString)).toBe(16);
  });

  it("should get the age based on a date number", () => {
    expect(dateTime.getAge(dobNumber)).toBe(16);
  });

  it("should get the age based on a YearMonthDay object", () => {
    expect(dateTime.getAge(dobYmd)).toBe(16);
  });
});

describe("dateTime#validateAge", () => {
  const today = new Date();

  const dobAtLeast38 = new Date(today);
  dobAtLeast38.setUTCFullYear(1980);

  const dobAtLeast16 = new Date(today);
  dobAtLeast16.setUTCFullYear(today.getUTCFullYear() - 16);

  const dobLessThan16 = dateTime.adjustDateByDays(dobAtLeast16, 1);

  it("should return true if date is above the default minimum age of 16", () => {
    expect(dateTime.validateAge(dobAtLeast38)).toBe(true);
    expect(dateTime.validateAge(dobAtLeast16)).toBe(true);
  });

  it("should return false if date is below the default minimum age of 16", () => {
    expect(dateTime.validateAge(today)).toBe(false);
    expect(dateTime.validateAge(dobLessThan16)).toBe(false);
  });

  it("should validate correctly if date is above or below a specified age", () => {
    expect(dateTime.validateAge(dobAtLeast38, 40)).toBe(false);
    expect(dateTime.validateAge(dobAtLeast16, 17)).toBe(false);
    expect(dateTime.validateAge(dobLessThan16, 15)).toBe(true);
  });
});
