function shfaqTekstMeStile(styles, tekst) {
    
    let stiletString = '';
  
    
    styles.forEach(style => {
      stiletString += `${style.name}:${style.value};`;
    });
  
    
    let htmlString = `<p style="${stiletString}">${tekst}</p>`;
  
    
    document.write(htmlString);
  }
  
  
  const stiletCSS = [
    { name: 'color', value: 'green' },
    { name: 'font-size', value: '18px' },
    { name: 'text-align', value: 'center' },
    
  ];
  
  const teksti = 'BEETROOT ACADEMY, PRISHTINE, 2023';
  
 
  shfaqTekstMeStile(stiletCSS, teksti);
  