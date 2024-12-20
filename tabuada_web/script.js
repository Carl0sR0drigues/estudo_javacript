function gerador(){
    var jn1 = Number(document.getElementById('txtn1').value)
    let res = document.querySelector('div#res')
    res.innerHTML = ''

    if (jn1 == 0){
        window.alert('Digite um numero!!!')
    }
    else {
        for (var a = 1; a <= 10; a++){
            res.innerHTML += `${jn1} x ${a} = ${jn1*a}<br>`
        }
    }
}





