//Exercise 4 - Level 2

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

  if(countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
  } else {
    countries.push('ethiopia');
  }

  //Exercise 1 - Level 3
  console.log(countries.slice(0,10));

  //Exercise 2 - Level 3
  countries.sort();
  console.log(countries);
  middleCountryIndex = Math.floor(countries.length/2);
  console.log(middleCountryIndex);

  console.log(countries[5]);





 