function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    // var hora = 19
    var minutos = agora.getMinutes()
    var datas = new Date()
    var dia = datas.getDate()
    var mes = datas.getMonth()+1
    var ano = datas.getFullYear()

    msg.innerHTML = `Hoje é ${dia}/${mes}/${ano} <br> E são exatamente ${hora}:${minutos}`

    if (hora >= 0 && hora <12){
        `Bom dia!!!`
        img.src = 'manha.jpg'
        document.body.style.background = '#2ecd9f'
    }
    else if (hora >= 12 && hora <18){
        `Boa tarde!!!`
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } 
    else {
        `Boa noite!!!`
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}