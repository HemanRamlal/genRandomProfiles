const fs = require('fs');

function subYears(date, years){
  date.setFullYear(date.getFullYear()- years)
}
function pickRandomIndex(array){
  return Math.floor(array.length*Math.random());
}
function pickRandomItem(array){
  return array[pickRandomIndex(array)];
}

/*
 * Generate `count` profiles belonging to given `ethnicities`,
 * ageing between 0 to `ageRange` years, 
 * @param {[string]} `ethnicities` - An array of `ethnicities`, currently supports "american" "russian" "chinese" "indian"
 * @param {number} `ageRange` - The generated profiles will be of age between range [0-`ageRange`]
 * @returns {[object]} Array of objects with keys `loginId`, `fullName`, `email`, `dob`
 */

module.exports = function(ethnicities, ageRange, count){
  if(ethnicities.length == 0 ||
    ageRange < 0 ||
    count <=0
  ) return [];

  let ethnicNamesData = [];
  for(ethnicity of ethnicities){
    ethnicNamesData.push(require('./data/'+ethnicity));
  }

  let profiles = [];
  const emailHosts = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "aol.com",
    "icloud.com",
    "protonmail.com",
    "zoho.com",
    "mail.com",
  ];
  for(let i = 0; i<count; i++){
    const ethnicity = pickRandomIndex(ethnicNamesData);
    const fName = pickRandomItem(ethnicNamesData[ethnicity].firstNames);
    const lName = pickRandomItem(ethnicNamesData[ethnicity].firstNames);

    let dob = new Date(Date.now() - Math.floor(Math.random() * 365*24*60*60*1000));
    subYears(dob, Math.floor(Math.random()*(ageRange+1)));

    profiles.push({
      loginId : (fName+lName+dob.getFullYear()).toLowerCase(),
      fullName : fName + ' ' + lName,
      email : (fName+lName+'@'+pickRandomItem(emailHosts)).toLowerCase(),
      dob : dob
    })
  }

  return profiles
}
