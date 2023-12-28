let continueLoop = true;

while (continueLoop) {
  let dayOfWeek = prompt('Shkruani një ditë të javës (për shembull, E Hënë):');

  if (dayOfWeek !== null) {
    let formattedDay = dayOfWeek.trim().toLowerCase();

    switch (formattedDay) {
      case 'e hënë':
        console.log('Dita e javës: E Hënë');
        break;
      case 'e martë':
        console.log('Dita e javës: E Martë');
        break;
      case 'e mërkurë':
        console.log('Dita e javës: E Mërkurë');
        break;
      case 'e enjte':
        console.log('Dita e javës: E Enjte');
        break;
      case 'e premte':
        console.log('Dita e javës: E Premte');
        break;
      case 'e shtunë':
        console.log('Dita e javës: E Shtunë');
        break;
      case 'e diel':
        console.log('Dita e javës: E Diel');
        break;
      default:
        console.log('Dita e dhënë nuk është e vlefshme. Ju lutem shkruani një ditë të javës të vlefshme.');
    }

    continueLoop = confirm('Dëshironi të shihni një ditë tjetër?');
  } else {
    continueLoop = false;
  }
}

console.log('Faleminderit për përdorimin e programit.');
