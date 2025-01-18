// Aguarda o carregamento completo do DOM antes de executar o código.
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa um array vazio para armazenar os itens da lista.
    const lista = [];
    
    // Seleciona o campo de entrada para adicionar novos itens.
    const novoIntemIput = document.getElementById('novoItem');
    
    // Seleciona o elemento HTML onde os itens da lista serão exibidos.
    const listagem = document.getElementById('listagem');

    // Adiciona um evento de clique ao botão de adicionar item.
    document.getElementById('adicionarItem').addEventListener('click', () => {
        // Obtém o valor do campo de entrada e remove espaços em branco nas extremidades.
        const novoItem = novoIntemIput.value.trim();

        // Verifica se o campo está vazio; se estiver, exibe um alerta e encerra a função.
        if (!novoItem)
            return alert('Por favor, digite um item!!!');

        // Adiciona o novo item ao array `lista`.
        lista.push(novoItem);

        // Limpa o campo de entrada para que o usuário possa digitar um novo item.
        novoIntemIput.value = '';

        // Atualiza a lista exibida na página, gerando o HTML dos itens dinamicamente.
        // O método `map` cria uma lista de strings HTML, incluindo o índice de cada item.
        // O `join('')` converte o array de strings em uma única string sem separadores.
        listagem.innerHTML = lista.map((item, i) => `   <li>${i}: ${item}</li>`).join('');
    });
});



function calculoImc() {
    // Solicita o nome do usuário e remove espaços desnecessários
    const nome = document.getElementById('nome').value.trim();
    
    // Solicita a altura do usuário em metros e converte o valor para um número
    const altura = parseFloat(document.getElementById('altura').value);
    
    // Solicita o peso do usuário em quilos e converte o valor para um número
    const peso = parseFloat(document.getElementById('peso').value);
    
    // Obtém o elemento onde o resultado do IMC será exibido
    const seuImc = document.getElementById('seuImc');

    // Calcula o IMC (peso dividido pela altura ao quadrado)
    const imc = peso / (altura * altura);

    // Exibe o resultado do IMC no elemento HTML
    seuImc.innerHTML = `${nome}, seu IMC é: ${imc.toFixed(2)}`;

    // Início da verificação das faixas de IMC
    if (imc < 18.5) {
        // Caso o IMC seja menor que 18.5, exibe que está abaixo do peso
        document.getElementById('voceEsta').innerHTML = 'Você está abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        // Caso o IMC esteja entre 18.5 e 24.9, exibe que o peso está adequado
        document.getElementById('voceEsta').innerHTML = 'Você está com peso adequado';
    } else if (imc >= 25 && imc < 30) {
        // Caso o IMC esteja entre 25.0 e 29.9, exibe que está com sobrepeso
        document.getElementById('voceEsta').innerHTML = 'Você está com sobrepeso';
    } else if (imc >= 30.0 && imc < 34.9) {
        // Caso o IMC esteja entre 30.0 e 34.9, exibe que está com obesidade grau 1
        document.getElementById('voceEsta').innerHTML = 'Você está com obesidade grau 1';
    } else if (imc >= 35.0 && imc < 39.9) {
        // Caso o IMC esteja entre 35.0 e 39.9, exibe que está com obesidade grau 2
        document.getElementById('voceEsta').innerHTML = 'Você está com obesidade grau 2';
    } else if (imc >= 40.0) {
        // Caso o IMC seja maior ou igual a 40.0, exibe que está com obesidade extrema
        document.getElementById('voceEsta').innerHTML = 'Você está com obesidade extrema, procure um médico';
    }
    // Fim da verificação das faixas de IMC

    // Calcula o peso ideal mínimo (18.5 * altura²)
    const faixaPeso1 = 18.5 * (altura * altura);
    
    // Calcula o peso ideal máximo (25.0 * altura²)
    const faixaPeso2 = 25.0 * (altura * altura);
    
    // Exibe o intervalo de peso ideal no elemento HTML
    document.getElementById('seuPeso').innerHTML = 
    `Seu peso ideal está entre ${faixaPeso1.toFixed(2)} kg e ${faixaPeso2.toFixed(2)} kg`;
}





