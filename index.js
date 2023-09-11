const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Friday', 'saturday'];
const currentDayOfWeek = currentDate.getDay()
const currentDayName = daysOfWeek[currentDayOfWeek];
const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
dayOfWeekElement.innerText = currentDayName;


// Function to update the current time in the specified div 
 const currentTimeInMilliseconds = new Date().getTime();
 const millisecondsTimeElement = document.querySelector('[data-testid="currentUTCTime"]')
 millisecondsTimeElement.textContent = currentTimeInMilliseconds;    