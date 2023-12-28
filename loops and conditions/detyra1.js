let numri = parseInt(prompt('Shkruani një numër:'));


if (!isNaN(numri) && numri > 0) {
  
  let shuma = 0;
  for (let i = 1; i <= numri; i++) {
    shuma += i;
  }

  console.log(`Shuma e numrave nga 1 deri në ${numri} është: ${shuma}`);
} else {
  console.log('Hyrja është e pavlefshme. Ju lutem shkruani një numër të vlefshëm dhe pozitiv.');
}
