const makina = {
    prodhuesi: "Toyota",
    modeli: "Corolla",
    viti: 2022,
    shpejtesiaMesatare: 60,

    shfaqInfo: function () {
        console.log(`Makina: ${this.prodhuesi} ${this.modeli}, Vit: ${this.viti}, Shpejtesia Mesatare: ${this.shpejtesiaMesatare} km/h`);
    },

    kohaPerDistancen: function (distanca) {
        const koha = distanca / this.shpejtesiaMesatare;
        const pushime = Math.floor(koha / 4);  
        const kohaTotale = koha + pushime;
        return kohaTotale;
    }
};


makina.shfaqInfo();


let distanca = 320;
let koha = makina.kohaPerDistancen(distanca);
console.log(`Koha e nevojshme për të mbuluar ${distanca} km është: ${koha.toFixed(2)} orë`);
