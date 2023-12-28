
function makeNumber(digit1, digit2, digit3) {
    
    return parseInt(`${digit1}${digit2}${digit3}`, 10);
  }
  
  
  let number1 = makeNumber(1, 4, 9);
  let number2 = makeNumber(2, 5, 7);
  let number3 = makeNumber(8, 3, 6);
  
  console.log("Number 1:", number1); 
  console.log("Number 2:", number2); 
  console.log("Number 3:", number3); 
  