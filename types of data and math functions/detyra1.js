
function kaShifraIdentike(numri) {
    const shifrat = String(numri).split('');
    return shifrat[0] === shifrat[1] && shifrat[1] === shifrat[2];
  }
  
  
  let inputi = prompt('Ju lutem shkruani një numër tre shifror:');
  let numriPerdoruesit = parseInt(inputi);
  
  
  if (!isNaN(numriPerdoruesit) && inputi.length === 3) {
    if (kaShifraIdentike(numriPerdoruesit)) {
      console.log(`${numriPerdoruesit} ka shifra identike.`);
    } else {
      console.log(`${numriPerdoruesit} nuk ka shifra identike.`);
    }
  } else {
    console.log('Inputi i pavlefshëm. Ju lutem jepni një numër të vlefshëm tre shifror.');
  }
  