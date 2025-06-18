# `genRandomProfiles` Module

Generates an array of user profile objects based on the specified ethnicity and age range.

## Description

`genRandomProfiles` module creates mock user data for testing or development purposes. Each profile includes a unique login ID, full name, email address, and date of birth (DOB) derived from the age and ethnicity constraints.

## Parameters

| Name         | Type       | Description                                                                 |
|--------------|------------|-----------------------------------------------------------------------------|
| `ethnicities`| `string[]` | Array of ethnicities to generate profiles from. Supported: `"american"`, `"russian"`, `"chinese"`, `"indian"` |
| `ageRange`   | `number`   | Maximum age (inclusive). Profiles will be aged between 0 and `ageRange`.   |
| `count`      | `number`   | Number of profiles to generate.                                            |

## Returns

`Object[]` - An array of profile objects, each containing the following keys:

- `loginId` (`string`): Unique identifier
- `fullName` (`string`): Generated full name based on ethnicity
- `email` (`string`): Email address
- `dob` (`ISODate`): Date of birth

## Example

```js
const genRandomProfiles = require('genrandomprofiles');
const profiles = genRandomProfiles(["russian", "indian"], 40, 10);
console.log(profiles[0]);
// {
//   loginId: "user1987",
//   fullName: "Vladimir Ivanov",
//   email: "vladimirivanov@gmail.com",
//   dob: "1987-11-05"
// }

