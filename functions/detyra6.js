function findPerfectNumbersInRange(min, max) {
    if (min < 0 || min > max) {
      console.log("Invalid range.");
      return [];
    }
  
    let perfectNumbers = [];
  
    for (let i = min; i <= max; i++) {
      if (isPerfectNumber(i)) {
        perfectNumbers.push(i);
      }
    }
  
    return perfectNumbers;
  }
  
  
  let minRange = 1;
  let maxRange = 1000;
  
  let perfectNumbersInRange = findPerfectNumbersInRange(minRange, maxRange);
  
  console.log(`Perfect numbers between ${minRange} and ${maxRange}:`, perfectNumbersInRange);
  