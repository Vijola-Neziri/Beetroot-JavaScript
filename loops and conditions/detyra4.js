let numri = parseInt(prompt('Shkruani një numër:'));

if (!isNaN(numri) && numri >= 0) {
  let numriString = numri.toString();
  let numriDigits = numriString.length;
  console.log(`Numri ${numri} ka ${numriDigits} shifra.`);
} else {
  console.log('Hyrja është e pavlefshme. Ju lutem shkruani një numër të vlefshëm dhe jo-negativ.');
}
