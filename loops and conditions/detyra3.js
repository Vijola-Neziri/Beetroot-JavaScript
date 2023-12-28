let numri = parseInt(prompt('Shkruani një numër:'));

if (!isNaN(numri) && numri > 0) {
  console.log(`Divizorët e numrit ${numri} janë:`);
  for (let i = 1; i <= numri; i++) {
    if (numri % i === 0) {
      console.log(i);
    }
  }
} else {
  console.log('Hyrja është e pavlefshme. Ju lutem shkruani një numër të vlefshëm dhe pozitiv.');
}
