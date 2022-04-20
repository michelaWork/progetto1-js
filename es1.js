function calculator(){
    num1 = parseInt(document.getElementById('num1').value)
    num2 = parseInt(document.getElementById('num2').value)
    op = document.getElementById('op').value.toLowerCase()

    switch (op){
        case 'somma':
            document.getElementById('ris').innerHTML = (num1+num2)
            break;
        case 'sottrazione':
            document.getElementById('ris').innerHTML = num1-num2
            break;
        case 'moltiplicazione':
            document.getElementById('ris').innerHTML = num1*num2
            break;
        case 'divisione':
            document.getElementById('ris').innerHTML = num1/num2
            break;
        case 'modulo':
            document.getElementById('ris').innerHTML = num1%num2
            break;
        case 'potenza':
            document.getElementById('ris').innerHTML = Math.pow(num1,num2)
            break;
        case 'media':
            document.getElementById('ris').innerHTML = (num1+num2)/2
            break;
        default:
            ris = console.log('operazione non disponibile');
    }    
}

