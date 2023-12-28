
function krahasoNumrat(numri1, numri2) {
    if (numri1 < numri2) {
      return -1;
    } else if (numri1 > numri2) {
      return 1;
    } else {
      return 0;
    }
  }
  
  let rezultati1 = krahasoNumrat(5, 10);
  let rezultati2 = krahasoNumrat(15, 5);
  let rezultati3 = krahasoNumrat(8, 8);
  
  console.log("Rezultati 1:", rezultati1);
  console.log("Rezultati 2:", rezultati2);
  console.log("Rezultati 3:", rezultati3);
  