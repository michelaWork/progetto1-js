function trova_modello(){
    var marca = document.getElementById('marca').value.toLowerCase()

    var garage = [
        {marca: 'fiat', modello : '500'},
        {marca: 'renault', modello : 'clio'},
        {marca: 'fiat', modello : 'multipla'},
        {marca: 'renault', modello : 'modus'},
        {marca: 'citroen', modello : 'c3'},
        {marca: 'citroen', modello : 'c4'},
        {marca: 'citroen', modello : 'ct5'},
    ]

    const risultato = garage.filter(obj => {
        return obj.marca === marca;
      });
    for (let i = 0; i < risultato.length; i++){
        document.write = risultato[i].modello
      }
}

document.getElementById('test').innerHTML = trova_modello()

