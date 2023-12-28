let minRange = 0;
let maxRange = 100;
let guessed = false;

console.log('Mendoni një numër nga 0 deri në 100 dhe unë do të provoj ta kuptoj.');

while (!guessed) {
  let guess = Math.floor((minRange + maxRange) / 2);

  let userResponse = prompt(`A është numri juaj > ${guess}, < ${guess}, ose == ${guess}? (përgjigjuni me >, <, ose ==)`);

  if (userResponse === null) {
    // Përdoruesi ka anuluar lojën
    break;
  }

  userResponse = userResponse.trim();

  switch (userResponse) {
    case '>':
      minRange = guess + 1;
      break;
    case '<':
      maxRange = guess - 1;
      break;
    case '==':
      guessed = true;
      console.log(`Bravo! Numri juaj është ${guess}.`);
      break;
    default:
      console.log('Përgjigja e pavlefshme. Ju lutem përgjigjuni me >, <, ose ==.');
  }
}

if (!guessed) {
  console.log('Loja është anuluar ose ka ndodhur një gabim.');
}
