function ativar() {
    document.getElementById("tempo").innerHTML = "Aguarde 3 segundos";
    tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o setTimeout";
        document.body.style.backgroundColor = "green";
    }, 3000);
}

function desativar(){
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Contagem parada"
}

function contar(){
    temporizador = setInterval(function(){
        var cronometro = document.getElementById("temporismo").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("temporismo").innerHTML = soma

        if (soma == 3) {
            const alertSound = document.getElementById("alarme");
            alertSound.play();
            clearInterval(temporizador);

        }

    }, 1000);
}

function parar(){
    clearInterval(temporizador);
}

