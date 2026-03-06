export const desiredCourseOptions = [
  "MBBS",
  "MBA",
  "MS",
  "MSc",
  "Other PG Courses"
] as const;

export const countryIntakeOptions = {
  "United Kingdom": ["March", "May", "July", "September", "November", "January 2027"],
  "Ireland": ["September", "January 2027"],
  "United States of America": [
    "May",
    "July",
    "Fall - August",
    "Fall - September",
    "October",
    "January 2027"
  ],
  "Canada": ["May", "September", "January 2027"],
  "United Arab Emirates": ["January 2027", "March 2027", "February 2027", "May", "September"],
  "Germany": ["January 2027", "March 2027", "May", "September", "October", "November"],
  "France": ["January 2027", "March 2027", "May", "September", "October"],
  "New Zealand": ["April", "May", "July", "September", "October", "January 2027"],
  "Netherlands": ["May", "September", "October", "January 2027", "February 2027"],
  "Finland": ["August", "September", "January 2027"],
  "Singapore": ["May", "July", "September", "November", "January 2027"],
  "Australia": ["July", "September", "November", "January 2027"]
} as const;

export const preferredCountryOptions = Object.keys(countryIntakeOptions);

export const domesticPreferredCityOptions = [
  "Bangalore",
  "Coimbatore",
  "Chennai",
  "Madurai",
  "Other Districts"
] as const;

export const getIntakeOptionsForCountry = (country: string): string[] => {
  return countryIntakeOptions[country as keyof typeof countryIntakeOptions]
    ? [...countryIntakeOptions[country as keyof typeof countryIntakeOptions]]
    : [];
};
