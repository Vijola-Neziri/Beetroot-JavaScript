function isPerfectNumber(number) {
    if (number <= 0) {
      return false; 
    }
  
    let sumOfDivisors = 0;
  
    for (let i = 1; i <= Math.floor(number / 2); i++) {
      if (number % i === 0) {
        sumOfDivisors += i;
      }
    }
  
    return sumOfDivisors === number;
  }
  
  
  let testNumber = 28;
  if (isPerfectNumber(testNumber)) {
    console.log(`${testNumber} is a perfect number.`);
  } else {
    console.log(`${testNumber} is not a perfect number.`);
  }
  