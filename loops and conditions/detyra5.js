let totalNumbers = 10;
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let oddCount = 0;
let evenCount = 0;

for (let i = 1; i <= totalNumbers; i++) {
  let num = parseInt(prompt(`Shkruani numrin ${i}:`));

  if (!isNaN(num)) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }

    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  } else {
    console.log(`Vlera e dhënë për numrin ${i} është e pavlefshme. Ju lutem shkruani një numër.`);
    i--; 
  }
}

console.log(`Statistikat:
Numrat pozitivë: ${positiveCount}
Numrat negativë: ${negativeCount}
Zero: ${zeroCount}
Numrat të çiftë: ${evenCount}
Numrat të pare: ${oddCount}`);
