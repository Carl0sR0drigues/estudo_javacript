function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) 
            {genero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'beb man.jpg')
            }
            else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'adolescente man.jpg')
            }
            else if (idade  <50) {
                //Adulto
                img.setAttribute('src', 'man adulto.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'mr man.jpg')
            }
        }

        else if (fsex[1].checked) 
            { genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'beb woman.jpg')
            }
            else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'adolescente woman.jpg')
            }
            else if (idade  <50) {
                //Adulto
                img.setAttribute('src', 'woman adulta.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'mrs woman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.borderRadius = '50%'
        img.style.backgroundColor = '10px black'
    }
}


