function onclick1(){
    document.getElementById('a').style.backgroundColor = "blueviolet"
}

function onclick2(){
    document.getElementById('a').style.backgroundColor = "black"
}

function dblclick1(){
    document.getElementById('b').style.backgroundColor = "blueviolet"
}

function dblclick2(){
    document.getElementById('b').style.backgroundColor = "black"
}

function onmouseover1(){
    document.getElementById('c').style.backgroundColor = "blueviolet"
}

function onmouseover2(){
    document.getElementById('c').style.backgroundColor = "black"
}

function onmouseout1(){
    document.getElementById('d').style.backgroundColor = "blueviolet"
}
function onmouseout2(){
    document.getElementById('d').style.backgroundColor = "black"
}

let duasCores = false; //VARIAVEL PARA CONTROLAR A COR
function onmousemove1(){
    const elemento = document.getElementById('e');
    //ALTERA A COR COM BASE NA VARIAVEL DUASCORES
    if (duasCores){
        elemento.style.backgroundColor = 'blueviolet';
    }else{
        elemento.style.backgroundColor = 'black'
    }
    duasCores = !duasCores;
}

function onmousedown1(){
    document.getElementById('f').style.backgroundColor = "blueviolet"
}
function onmousedown2(){
    document.getElementById('f').style.backgroundColor = "black"
}

function onmouseup1(){
    document.getElementById('g').style.backgroundColor = "blueviolet"
}
function onmouseup2(){
    document.getElementById('g').style.backgroundColor = "black"
}

function limparSozinho(){
    document.getElementById('areaTexto2').style.border = "10px solid green";
    document.getElementById('areaTexto2').value = "";
}

let duasCores2 = false; //VARIAVEL PARA CONTROLAR A COR
function mudou(){
    const elemento = document.getElementById('i');
    //ALTERA A COR COM BASE NA VARIAVEL DUASCORES
    if (duasCores2){
        elemento.style.backgroundColor = 'blueviolet';
    }else{
        elemento.style.backgroundColor = 'black'
    }
    duasCores2 = !duasCores2;
}

let duasCores3 = false; //VARIAVEL PARA CONTROLAR A COR
function funcaoOnblur(){
    const elemento = document.getElementById('j');
    //ALTERA A COR COM BASE NA VARIAVEL DUASCORES
    if (duasCores3){
        elemento.style.backgroundColor = 'blueviolet';
    }else{
        elemento.style.backgroundColor = 'black'
    }
    duasCores3 = !duasCores3;
}

let duasCores4 = false; // Variável para controlar a cor

function funcaoOnblur1(elemento) {
    // Altera a cor do elemento que chamou a função
    if (duasCores3) {
        elemento.style.backgroundColor = 'blueviolet';
    } else {
        elemento.style.backgroundColor = 'black';
    }
    duasCores3 = !duasCores3; // Alterna a variável
}


let duasCores5 = false; //VARIAVEL PARA CONTROLAR A COR
function onresize1(){
    const elemento = document.getElementById('pagina');
    //ALTERA A COR COM BASE NA VARIAVEL DUASCORES
    if (duasCores5){
        elemento.style.backgroundColor = 'blueviolet';
    }else{
        elemento.style.backgroundColor = 'black'
    }
    duasCores5 = !duasCores5;
}