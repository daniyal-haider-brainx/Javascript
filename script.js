// Function to verify age
function verifyAge() {
    // Storing inputs on the basis of ID
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    // Validating day, month, and year inputs
    if (isNaN(day) || day < 1 || day > 31) {
      alert("Invalid Day. Please enter a valid day between 1 and 31.");
      return;
    } else if (isNaN(month) || month < 1 || month > 12) {
      alert("Invalid Month. Please enter a valid month between 1 and 12.");
      return;
    } else if (isNaN(year) || year < 1900 || year > 2023) {
      alert("Invalid Year. Please enter a valid year between 1900 and 2023.");
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
  