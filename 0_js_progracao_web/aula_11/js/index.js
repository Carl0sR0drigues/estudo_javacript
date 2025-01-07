let lis = document.getElementById('listas')
let item = document.getElementById('itens')

const lista = ["arroz", "feijão", "macarão", "leite"];
lista[0] = "carne";
lista.push("batatas")
lis.innerHTML = lista.join('<br>');
item.innerHTML = lista[2];
item.innerHTML = lista[lista.length-1];

(Array.isArray(lista))






function abrirAlert() {
    document.getElementById("alertPersonalized").style.display = "block";
}

function fecharAlert() {
    document.getElementById("alertPersonalized").style.display = "none";
}




const frutas = ["Maçã", "Banana", "Laranja", "Abacaxi"];
frutas[0]; /*"Maçã"*/
frutas[2]; /*"Laranja"*/
