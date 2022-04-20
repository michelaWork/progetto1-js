var garage = [
  {marca: 'fiat', modello : '500'},
  {marca: 'renault', modello : 'clio'},
  {marca: 'fiat', modello : 'multipla'},
  {marca: 'renault', modello : 'modus'},
  {marca: 'citroen', modello : 'c3'},
  {marca: 'citroen', modello : 'c4'},
  {marca: 'citroen', modello : 'c5 cross'},
]

function trova_modello(){
  var marca = document.getElementById('marca').value.toLowerCase()
  const search = garage.filter(obj => {
    return obj.marca === marca;
  });

  if (search.length == 0){
    console.log('inserisci una marca valida')
  } else {
    document.getElementById('wrap-modello').innerHTML = ''
    for (let i = 0; i < search.length; i++){
    var element = document.createElement("p");
    element.setAttribute('id','modello')
    element.innerHTML = search[i].modello;
    document.getElementById('wrap-modello').append(element);
    }
  }
}


