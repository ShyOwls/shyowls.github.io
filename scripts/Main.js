/*This section of code will display the time and formatted date.
using built-in Objects  
*/


// Function 1:  to update the current time
function updateTime() {
  var currentTimeElement = document.getElementById('currentTime');//Id of currentTime, located at the top of the body of each page 
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var lastupdate = document.lastModified;

  // Add leading zero if minutes/seconds are less than 10
  // The '?' is a Ternary Operator or java if..else short hand 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var formattedTime = hours + ':' + minutes + ':' + seconds;
  currentTimeElement.textContent = 'Current Time: ' + formattedTime;
}
// Update time every second
setInterval(updateTime, 1000);
// Initial update
updateTime();
var startTime = new Date();


// Function 2:  to calculate and display time spent on the page
function updateTimeSpent() {
	var currentTime = new Date();
	var timeSpent = currentTime - startTime;

	// Convert milliseconds to seconds
	var secondsSpent = Math.floor(timeSpent / 1000);

	// Convert seconds to minutes and hours
	var minutesSpent = Math.floor(secondsSpent / 60);
	var hoursSpent = Math.floor(minutesSpent / 60);
	 // Calculate remaining minutes after deducting hours
	minutesSpent %= 60;
	// Display the time spent
	var timeSpentElement = document.getElementById('timeSpent');
  timeSpentElement.textContent = 'Time Spent on this page: ' + hoursSpent + ' hours, ' + minutesSpent + ' minutes, ' + secondsSpent % 60 + ' seconds';
}

// Update time spent every second
setInterval(updateTimeSpent, 1000);

// Initial update
updateTimeSpent();
