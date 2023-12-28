
function eshtePalindrom(numri) {
    const stringNumri = String(numri);
    const stringNumriKundert = stringNumri.split('').reverse().join('');
    return stringNumri === stringNumriKundert;
  }
  
  let inputi = prompt('Ju lutem shkruani një numër:');
  let numriPerdoruesit = parseInt(inputi);
  
  
  if (!isNaN(numriPerdoruesit)) {
    if (eshtePalindrom(numriPerdoruesit)) {
      console.log(`${numriPerdoruesit} është palindrom.`);
    } else {
      console.log(`${numriPerdoruesit} nuk është palindrom.`);
    }
  } else {
    console.log('Inputi i pavlefshëm. Ju lutem jepni një numër të vlefshëm.');
  }
  