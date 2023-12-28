function llogaritSiperfaqen(gjeresia, gjatesia = null) {
    if (gjatesia === null) {
      return Math.pow(gjeresia, 2);
    } else {
      return gjeresia * gjatesia;
    }
  }
  
  let siperfaqjaEKatrore = llogaritSiperfaqen(5);
  let siperfaqjaEDrejtkendesh = llogaritSiperfaqen(4, 6);
  
  console.log("Sipërfaqja e Katrorit:", siperfaqjaEKatrore);        // Duhet të jetë 25 (5^2)
  console.log("Sipërfaqja e Drejtkëndëshit:", siperfaqjaEDrejtkendesh);   // Duhet të jetë 24 (4 * 6)
  