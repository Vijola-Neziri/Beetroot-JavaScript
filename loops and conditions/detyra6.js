let continueCalculating = true;

while (continueCalculating) {
  let num1 = parseFloat(prompt('Shkruani numrin e parë:'));
  let num2 = parseFloat(prompt('Shkruani numrin e dytë:'));
  let operator = prompt('Shkruani një operator (+, -, *, /):');

  if (!isNaN(num1) && !isNaN(num2)) {
    switch (operator) {
      case '+':
        console.log(`Rezultati: ${num1 + num2}`);
        break;
      case '-':
        console.log(`Rezultati: ${num1 - num2}`);
        break;
      case '*':
        console.log(`Rezultati: ${num1 * num2}`);
        break;
      case '/':
        if (num2 !== 0) {
          console.log(`Rezultati: ${num1 / num2}`);
        } else {
          console.log('Nuk është e mundur përdorimi i 0 si numër të dytë në përqindje.');
        }
        break;
      default:
        console.log('Operatori i pavlefshëm. Ju lutem shkruani një operator (+, -, *, /).');
    }
  } else {
    console.log('Vlera e dhënë është e pavlefshme. Ju lutem shkruani një numër për secilin numër.');
  }

  let pergjigja = prompt('Dëshironi të bëni një llogari të tjera? (po/jo)').toLowerCase();
  continueCalculating = (pergjigja === 'po');
}


