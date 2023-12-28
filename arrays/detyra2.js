const listaBlerjeve = [
    { emri: 'Qumesht', sasia: 2, cmimiPerArtikull: 1.5 },
    { emri: 'Buka', sasia: 3, cmimiPerArtikull: 2 },
    { emri: 'Veze', sasia: 12, cmimiPerArtikull: 0.1 },
    
  ];
  
  
  function shfaqListeBlerjesh() {
    console.log('Lista e Blerjeve:');
    listaBlerjeve.forEach(artikull => {
      console.log(`${artikull.sasia} ${artikull.emri}(a) - $${artikull.cmimiPerArtikull.toFixed(2)} secili`);
    });
  }
  
  
  function llogaritTotalin() {
    let totali = 0;
    listaBlerjeve.forEach(artikull => {
      totali += artikull.sasia * artikull.cmimiPerArtikull;
    });
    return totali.toFixed(2);
  }
  
  
  function gjejArtikullinMeShtrenjte() {
    let artikulliMeShtrenjte = listaBlerjeve.reduce((max, artikull) => (artikull.cmimiPerArtikull > max.cmimiPerArtikull ? artikull : max), listaBlerjeve[0]);
    return artikulliMeShtrenjte;
  }
  
 
  function llogaritCmiminMesatar() {
    let numriTotalArtikujve = listaBlerjeve.length;
    let totaliBlerjes = llogaritTotalin();
    return (totaliBlerjes / numriTotalArtikujve).toFixed(2);
  }
  
  
  shfaqListeBlerjesh();
  console.log('Totali i Blerjes: $' + llogaritTotalin());
  console.log('Artikulli më i Shtrenjtë:', gjejArtikullinMeShtrenjte().emri);
  console.log('Çmimi Mesatar i Artikullit: $' + llogaritCmiminMesatar());
  