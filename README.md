# smoldate

This date lib is very smol.

## Why?

I didn't want to use moment, and I just needed some very basic date functions.

- Convert a variety of date formats to a variety of other date formats
- Get/check the age of a date
- Adjust a date by days

## How?

```javascript
import smoldate from "smoldate";

// There's a new object in town: YearMonthDay
const nowAsYMD = smoldate.convertDateToYearMonthDay(new Date());

// Get the number of days in a given month (reliant on the year)
const daysInThisMonth = smoldate.daysInMonth(nowAsYMD.year, nowAsYMD.month);

// Convert an accepted date format to a simple YYYY-MM-DD string
const nowAsString = smoldate.convertDateToString(nowAsYMD);

// Adjust the date by days
const twoDaysFromNow = smoldate.adjustDateByDays(nowAsYMD, 2);

// Get the age in years of a date
const howOldIsStarWars = smoldate.getAge("1977-10-19");

// Validate the age is equal or above a minimum age
const canLegallyDrinkAlcohol = smoldate.validateAge("2000-01-01", 21);
```

## Installation

### Browser

```html
<script src="//unpkg.com/smoldate@1.0.0/dist/smoldate.umd.js"></script>
<script>
  // window.smoldate should then be available
  console.log(smoldate);
</script>
```

### ES Module

```bash
  npm i smoldate
  yarn add smoldate
```

Then in your source code:

```javascript
// ES5
const smoldate = require("smoldate").default;
const { convertDateToString } = require("smoldate");

// ES6/TypeScript
import smoldate from "smoldate";
import { convertDateToString } from "smoldate";
```

## Development

To download external dependencies:

```bash
  npm i
```

To run tests (using Jest):

```bash
  npm test
```

## Contribute

Got cool ideas? Have questions or feedback? Found a bug? [Post an issue](https://github.com/lvl99/smoldate/issues)

Added a feature? Fixed a bug? [Post a PR](https://github.com/lvl99/smoldate/compare)

## License

[Apache 2.0](LICENSE.md)
