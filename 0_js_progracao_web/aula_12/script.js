function decimal(){
    let numero = document.getElementById('numero').value;

    if (numero < 10){
        document.getElementById('resultado').innerHTML = 'O númeral é unidades';
    } else if (numero >= 10 && numero < 100){
        document.getElementById('resultado').innerHTML = 'O número é dezenas';
    }
    else if (numero < 1000 && numero >= 100){
        document.getElementById('resultado').innerHTML = 'O número é centenas';
    }
    else if (numero >= 1000 && numero < 10000){
        document.getElementById('resultado').innerHTML = 'O número é milhares';
    }
    else {
        document.getElementById('resultado').innerHTML = 'O número é dezenas de milhares';
    }
}

