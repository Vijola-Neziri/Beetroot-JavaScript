
function konvertoValutat(sasiaUSD, kodValute) {
    const kursetKembimit = {
      EUR: 0.87,  
      SEK: 8.74, 
      AUD: 1.34   
    };
  
    if (kursetKembimit[kodValute]) {
      const sasiaKonvertuar = sasiaUSD * kursetKembimit[kodValute];
      return sasiaKonvertuar.toFixed(2); 
    } else {
      return 'Kodi i valutës është i pavlefshëm';
    }
  }
  
  
  let sasiaUSD = parseFloat(prompt('Shkruani sasine në USD:'));
  let kodValute = prompt('Zgjidhni një valutë (p.sh., EUR, SEK, AUD):').toUpperCase();
  
  
  if (!isNaN(sasiaUSD)) {
   
    const sasiaKonvertuar = konvertoValutat(sasiaUSD, kodValute);
    if (sasiaKonvertuar !== 'Kodi i valutës është i pavlefshëm') {
      console.log(`${sasiaUSD} USD është e barabartë me ${sasiaKonvertuar} ${kodValute}`);
    } else {
      console.log('Kodi i valutës është i pavlefshëm. Ju lutem shkruani një kod valute të vlefshëm.');
    }
  } else {
    console.log('Hyrja është e pavlefshme. Ju lutem shkruani një sasi të vlefshme në USD.');
  }
  