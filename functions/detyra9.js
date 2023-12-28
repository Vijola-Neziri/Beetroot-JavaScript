function sekondaNeKohe(totalSekonda) {
    const ore = Math.floor(totalSekonda / 3600);
    const minuta = Math.floor((totalSekonda % 3600) / 60);
    const sekondaRimane = totalSekonda % 60;

   
    const formatuar = `${ore.toString().padStart(2, '0')}:${minuta.toString().padStart(2, '0')}:${sekondaRimane.toString().padStart(2, '0')}`;
    return formatuar;
}


let totalSekonda = parseInt(prompt("Shkruani numrin e sekondave:"));

if (!isNaN(totalSekonda) && totalSekonda >= 0) {
    let kohaFormatuar = sekondaNeKohe(totalSekonda);
    console.log(`Koha e formatuar është: ${kohaFormatuar}`);
} else {
    console.log("Input-i i pavlefshëm. Ju lutem shkruani një numër pozitiv të sekondave.");
}
