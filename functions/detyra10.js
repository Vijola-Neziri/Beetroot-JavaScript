function kohaNeSekonda(ore, minuta, sekonda) {
    return ore * 3600 + minuta * 60 + sekonda;
}

function sekondaNeKohe(totalSekonda) {
    const ore = Math.floor(totalSekonda / 3600);
    const minuta = Math.floor((totalSekonda % 3600) / 60);
    const sekondaRimane = totalSekonda % 60;
    return `${ore.toString().padStart(2, '0')}:${minuta.toString().padStart(2, '0')}:${sekondaRimane.toString().padStart(2, '0')}`;
}

function dallimiNgaData(ore1, minuta1, sekonda1, ore2, minuta2, sekonda2) {
    const totalSekonda1 = kohaNeSekonda(ore1, minuta1, sekonda1);
    const totalSekonda2 = kohaNeSekonda(ore2, minuta2, sekonda2);
    const dallimiSekonda = Math.abs(totalSekonda1 - totalSekonda2);
    return sekondaNeKohe(dallimiSekonda);
}


let ore1 = parseInt(prompt("Shkruani orën e dates së parë:"));
let minuta1 = parseInt(prompt("Shkruani minutat e dates së parë:"));
let sekonda1 = parseInt(prompt("Shkruani sekondat e dates së parë:"));

let ore2 = parseInt(prompt("Shkruani orën e dates së dytë:"));
let minuta2 = parseInt(prompt("Shkruani minutat e dates së dytë:"));
let sekonda2 = parseInt(prompt("Shkruani sekondat e dates së dytë:"));

if (!isNaN(ore1) && !isNaN(minuta1) && !isNaN(sekonda1) && !isNaN(ore2) && !isNaN(minuta2) && !isNaN(sekonda2)) {
    let rezultati = dallimiNgaData(ore1, minuta1, sekonda1, ore2, minuta2, sekonda2);
    console.log(`Dallimi midis dy datave është: ${rezultati}`);
} else {
    console.log("Input-i i pavlefshëm. Ju lutem shkruani vlera numerike për orën, minutat dhe sekondat.");
}
