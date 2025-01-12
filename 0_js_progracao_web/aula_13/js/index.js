function claroEscuto(){
    document.body.classList.toggle('dark-mode');
}

function decimal(){
    let numero = document.getElementById('numero').value;
    numero = parseInt(numero);

    let categoria;
    switch(true){
        case (numero < 10):
            categoria = 'Unidade';
            break;
        case (numero >= 10 && numero < 100):
            categoria = 'Dezena';
            break;
        case (numero >= 100 && numero < 1000):
            categoria = 'Centena';
            break;
        case (numero >= 1000 && numero < 10000):
            categoria = 'Milhar';
            break;
        default:
            categoria = 'Número fora do intervalo';
            break;
    }
    document.getElementById('resultado').innerHTML = `Este numero é ${categoria}`;
}