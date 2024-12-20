function contar(){
    var xinicio = Number(document.getElementById('inicio').value)
    var xfim = Number(document.getElementById('fim').value)
    var xpasso = Number(document.getElementById('passo').value)
    var xcontar = document.querySelector('div#contando')
    xcontar.innerHTML = ''
    if (xpasso <= 0){
        window.alert('Passo invalido! Considerando passo 1')
        xpasso = 1
    }
    if (xinicio == 0 || xfim ==0 ){
        window.alert('[ERRO] Faltam dados!')
        xcontar.innerHTML = ''
    }

    else {
        xcontar.innerHTML = 'Contando:<br>'
    }

    for (var a = xinicio; a <= xfim; a += xpasso){
        xcontar.innerHTML += `${a} 💩 <br>`
    }
    xcontar.innerHTML += `Caquei 🧻`
}


