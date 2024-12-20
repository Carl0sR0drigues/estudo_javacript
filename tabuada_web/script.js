function gerador(){
    var jn1 = Number(document.getElementById('txtn1').value)
    const seltab = document.getElementById("seltab")
    seltab.innerHTML = ''

    if (jn1 == 0){
        window.alert('Digite um numero!!!')
    }
    else {
        for (var a = 1; a <= 10; a++){
            const option = document.createElement('option')
            option.text = `${jn1} x ${a} = ${jn1*a}`
            seltab.append(option)
        }
    }
}





