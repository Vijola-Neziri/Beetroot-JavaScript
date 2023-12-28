function addLeadingZero(num) {
    return num < 10 ? '0' + num : num;
  }
  
  function formatTime(hours, minutes, seconds = 0) {
    return addLeadingZero(hours % 24) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds);
  }
  
 
  let userHours = parseInt(prompt("Shkruani orën:"));
  let userMinutes = parseInt(prompt("Shkruani minutat:"));
  let userSeconds = parseInt(prompt("Shkruani sekondat:"));
  
  
  if (!isNaN(userHours) && !isNaN(userMinutes) && !isNaN(userSeconds) && userMinutes >= 0 && userMinutes < 60 && userSeconds >= 0 && userSeconds < 60) {
    let formattedTime = formatTime(userHours, userMinutes, userSeconds);
    console.log("Ora e formatuar:", formattedTime);
  } else {
    console.log("Input-i i pavlefshëm. Ju lutem shkruani vlera numerike në rangun e duhur.");
  }
  