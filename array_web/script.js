let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resp = document.querySelector('div#resp')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resp.innerHTML = ''
    }
    else {
        window.alert('[ERRO] VALOR INVALIDO!!!')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes para finalizar')
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            media += valores[pos] / tot
            if (valores[pos] > maior)
                maior = valores[pos]
            else if (valores[pos] < menor)
                menor = valores[pos]
            }
        resp.innerHTML = ''
        resp.innerHTML += `<p>Total de ${tot} valores cadastrados.</p>`
        resp.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        resp.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        resp.innerHTML += `<p>A soma dos valores cadastrado foi ${soma}.</p>`
        resp.innerHTML += `<p>A media dos valores cadastrado foi ${media}.</p>`

    }
}