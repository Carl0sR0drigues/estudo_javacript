function parimpar(n){
    if (n % 2 == 0){
        return 'par'
    }
    else {
        return 'impar'
    }
}

var resposta = parimpar(14)

console.log(resposta)
console.log(parimpar(15))