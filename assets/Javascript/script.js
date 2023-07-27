function verifyAge() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);
  // Check if any of the input fields are empty
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Please enter a valid date of birth.");
    return;
  }
  // Validate days for specific months
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Every year that is exactly divisible by four is a leap year, except for years 
  //that are exactly divisible by 100, but these centurial years are leap years if 
  //they are exactly divisible by 400.
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  if (month === 2) {
    daysInMonth[month] = isLeapYear ? 29 : 28;
  }

  if (day < 1 || day > daysInMonth[month]) {
    alert(`Invalid Day for the selected month. Please enter a valid day between 1 and ${daysInMonth[month]}.`);
    return;
  }

  // Storing Current Date, Day, Year, Month
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  // Calculating Age
  let age = currentYear - year;

  // Checking if birthday month has not arrived
  // Checking if birthday month has arrived but date has not arrived yet
  // If so, decrement age
  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age--;
  }

  // Checking if age < 15 ---> restricted age
  if (age < 15) {
    alert("Your age is restricted.");
  }
  // If age >= 15 ---> redirect to google
  else {
    window.location.href = "https://www.google.com";
  }
}