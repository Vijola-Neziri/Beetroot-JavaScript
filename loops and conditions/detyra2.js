let numri1 = parseInt(prompt('Shkruani një numër:'));
let numri2 = parseInt(prompt('Shkruani një numër tjetër:'));

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

if (!isNaN(numri1) && !isNaN(numri2) && numri1 > 0 && numri2 > 0) {
  let rezultati = gcd(numri1, numri2);
  console.log(`Dy numrat e dhënë kanë divizorin më të madh të përbashkët: ${rezultati}`);
} else {
  console.log('Hyrja është e pavlefshme. Ju lutem shkruani dy numra të vlefshëm dhe pozitivë.');
}
