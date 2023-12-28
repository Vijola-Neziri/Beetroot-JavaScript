
function calculateFactorial(number) {
    
    if (number < 0) {
      return "Invalid input. Please enter a non-negative integer.";
    }
  
    
    if (number === 0 || number === 1) {
      return 1;
    }
  
    
    return number * calculateFactorial(number - 1);
  }
  
  
  let factorialOf5 = calculateFactorial(5);
  let factorialOf7 = calculateFactorial(7);
  let factorialOf0 = calculateFactorial(0);
  
  console.log("Factorial of 5:", factorialOf5); 
  console.log("Factorial of 7:", factorialOf7); 
  console.log("Factorial of 0:", factorialOf0); 
  