var agora = new Date()
var hora = agora.getHours()
// var hora = 15
var minutos = agora.getMinutes()
var datas = new Date()
var dia = datas.getDate()
var mes = datas.getMonth()+1
var ano = datas.getFullYear()
console.log(`Hoje é ${dia}/${mes}/${ano}`)
console.log(`E são exatamente ${hora}:${minutos}`)
if (hora < 12 ){
    console.log(`Bom dia!!!`)
}
else if (hora <= 18){
    console.log(`Boa tarde!!!`)
} 
else {
    console.log(`Boa noite!!!`)
}