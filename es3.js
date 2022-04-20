function trova_modello(){
  
  var garage = [
    {marca: 'fiat', modello : '500'},
    {marca: 'renault', modello : 'clio'},
    {marca: 'fiat', modello : 'multipla'},
    {marca: 'renault', modello : 'modus'},
    {marca: 'citroen', modello : 'c3'},
    {marca: 'citroen', modello : 'c4'},
    {marca: 'citroen', modello : 'c5 cross'},
  ]

  var marca = document.getElementById('marca').value.toLowerCase()
  const risultato = garage.filter(obj => {
      return obj.marca === marca;
  });
  if (risultato.length == 0){
    console.log('inserisci una marca valida')
  }
    
  for (let i = 0; i < risultato.length; i++){
    var element = document.createElement("p");
    element.innerHTML = risultato[i].modello;
    document.getElementById('test').append(element);
  }
}


