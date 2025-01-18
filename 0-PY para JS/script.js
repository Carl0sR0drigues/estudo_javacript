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
        listagem.innerHTML = lista.map((item, i) => `<li>${i}: ${item}</li>`).join('');
    });
});




function calculoImc(){
    // Solicita o nome do usuário
    const nome = document.getElementById('nome').value.trim();
    
    // Solicita a altura do usuário em metros (convertida para número)
    const altura = parseFloat(document.getElementById('altura').value);
    
    // Solicita o peso do usuário em quilos (convertido para número)
    const peso = parseFloat(document.getElementById('peso').value);
    
    const seuImc = document.getElementById('seuImc');

    const imc = peso / (altura * altura)
    seuImc.innerHTML = `${nome}, seu IMC é: ${imc.toFixed(2)}`;
}