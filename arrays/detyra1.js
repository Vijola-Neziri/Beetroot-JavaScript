const listaBlerjeve = [
    { emri: 'Qumesht', sasia: 1, eshteBler: false },
    { emri: 'Buka', sasia: 2, eshteBler: false },
    { emri: 'Veze', sasia: 12, eshteBler: true },
  ];
  
  function shfaqListaBlerjeve() {
    const listaEsortuar = listaBlerjeve.sort((a, b) => a.eshteBlerur - b.eshteBlerur);
    
    console.log('Lista e Blerjeve:');
    listaEsortuar.forEach(element => {
      console.log(`${element.emri} - ${element.sasia} ${element.eshteBlerur ? '(blerur)' : '(s\'është blerur)'}`);
    });
  }
  
  
  function shtoBlerje(emri, sasia) {
    const indeksi = listaBlerjeve.findIndex(element => element.emri.toLowerCase() === emri.toLowerCase());
  
    if (indeksi !== -1) {
      listaBlerjeve[indeksi].sasia += sasia;
    } else {
      listaBlerjeve.push({ emri, sasia, eshteBlerur: false });
    }
  
    shfaqListaBlerjeve();
  }
  
  
  function blerjeProdukti(emri) {
    const produktiPërBlerje = listaBlerjeve.find(element => element.emri.toLowerCase() === emri.toLowerCase());
  
    if (produktiPërBlerje) {
      produktiPërBlerje.eshteBlerur = true;
      console.log(`${emri} është shënuar si blerur.`);
    } else {
      console.log(`${emri} nuk gjendet në listë.`);
    }
  
    shfaqListaBlerjeve();
  }
  
  
  shfaqListaBlerjeve();
  shtoBlerje('Djathë', 1);
  shtoBlerje('Buka', 3); 
  