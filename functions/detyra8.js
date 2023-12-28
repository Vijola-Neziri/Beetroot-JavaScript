function kohaNeSekonda(ore, minuta, sekonda) {
    
    const totalSekonda = ore * 3600 + minuta * 60 + sekonda;
    return totalSekonda;
}


let ore = parseInt(prompt("Shkruani orën:"));
let minuta = parseInt(prompt("Shkruani minutat:"));
let sekonda = parseInt(prompt("Shkruani sekondat:"));

if (!isNaN(ore) && !isNaN(minuta) && !isNaN(sekonda) && minuta >= 0 && minuta < 60 && sekonda >= 0 && sekonda < 60) {
    let totalSekonda = kohaNeSekonda(ore, minuta, sekonda);
    console.log(`Koha në sekonda është: ${totalSekonda} sekonda`);
} else {
    console.log("Input-i i pavlefshëm. Ju lutem shkruani vlera numerike të vlefshme për orën, minutat dhe sekondat.");
}
