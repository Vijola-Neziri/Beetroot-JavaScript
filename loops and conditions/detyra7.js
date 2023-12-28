let numri = prompt('Shkruani një numër:');
let numriSasia = parseInt(numri);

if (!isNaN(numriSasia)) {
  let numriShifra = numri.length;

  let sasiaLëvizje = parseInt(prompt(`Me sa shifra dëshironi ta lëvizni numrin "${numri}":`));

  if (!isNaN(sasiaLëvizje)) {
    sasiaLëvizje = sasiaLëvizje % numriShifra; 
    let numriLëvizur = numri.slice(sasiaLëvizje) + numri.slice(0, sasiaLëvizje);

    console.log(`Numri i lëvizur: ${numriLëvizur}`);
  } else {
    console.log('Sasia e lëvizjes është e pavlefshme. Ju lutem shkruani një numër për sa shifra dëshironi ta lëvizni.');
  }
} else {
  console.log('Vlera e dhënë është e pavlefshme. Ju lutem shkruani një numër të vlefshëm.');
}
