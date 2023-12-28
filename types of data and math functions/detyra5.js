
function eshteVitShkaktueshem(viti) {
    return (viti % 4 === 0 && viti % 100 !== 0) || (viti % 400 === 0);
  }
  
 
  function ditetNeMuaj(muaji, viti) {
    const ditetNeMuaj = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (muaji === 2 && eshteVitShkaktueshem(viti)) {
      return 29; 
    } else {
      return ditetNeMuaj[muaji - 1];
    }
  }
  
 
  function merrDatenEArdhshme(ditaAktuale) {
    const [dita, muaji, viti] = ditaAktuale.split(':').map(Number);
  
    if (dita > 0 && dita <= ditetNeMuaj(muaji, viti) && muaji > 0 && muaji <= 12 && viti > 0) {
     
      if (dita === ditetNeMuaj(muaji, viti)) {
       
        if (muaji === 12) {
          return `01:01:${viti + 1}`;
        } else {
          return `01:${muaji + 1}:${viti}`;
        }
      } else {
        return `${dita + 1}:${muaji}:${viti}`;
      }
    } else {
      return 'Data e pavlefshme';
    }
  }
  
  // Marrja e hyrjes nga përdoruesi
  let dataEPërdoruesit = prompt('Shkruani një datë në formatin dd:mm:yy:');
  
  // Marrja dhe shfaqja e datës së ardhshme
  let dataEArdhshme = merrDatenEArdhshme(dataEPërdoruesit);
  console.log(`Data e ardhshme është: ${dataEArdhshme}`);
  