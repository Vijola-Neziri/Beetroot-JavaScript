
function mundTeFitorje(perimetriRrethit, perimetriKatrori) {
    
    return perimetriRrethit <= perimetriKatrori;
  }
  
 
  let gjatesiaRrethit = parseFloat(prompt('Shkruani gjatësinë e perimetrit të rrethit:'));
  let perimetriKatrorit = parseFloat(prompt('Shkruani perimetrin e katrorit:'));
  
  
  if (!isNaN(gjatesiaRrethit) && !isNaN(perimetriKatrorit) && gjatesiaRrethit > 0 && perimetriKatrorit > 0) {
   
    const mundTeFitor = mundTeFitorje(gjatesiaRrethit, perimetriKatrorit);
  
   
    if (mundTeFitor) {
      console.log('Perimetri i rrethit mund të fitor në këtë katror.');
    } else {
      console.log('Perimetri i rrethit nuk mund të fitor në këtë katror.');
    }
  } else {
    console.log('Hyrja është e pavlefshme. Ju lutem shkruani sasi të vlefshme dhe pozitive.');
  }
  