document.getElementById('vem1').innerHTML = 
'Para cria uma caixa de texto com background, tamanho determinado e que faça quebra de linha automatica e preciso usar;';

document.getElementById('vem2').innerHTML = 'O "width" para determinar o tamanho';

document.getElementById('vem3').innerHTML = 'E depois;<br>O "word-wrap: break-word" para gerar as quebras de linhas';

document.getElementById('vem4').innerHTML = 
'Variaveis:<br>Var, Let e Const<br>As variaveis não podem ter espaços, não pode ter numero no inicio e nem anderline"_"<br>O "var" permiti Iredefinir os valores das variaveis, diferente de "let" e "const"';

var nome, sobrenome, nomecompleto, vai;

nome = 'Carlos';
sobrenome = 'Rodrigues';
nomecompleto = nome + ' ' + sobrenome

document.getElementById('vem5').innerHTML = 'Para concatenar o nome e sobrenome abaixo foi feito assim; <br>vai = document.getElementById("vem5")<br>vai.innerHTML = nomecompleto'

vai = document.getElementById('vem6')
vai.innerHTML = nomecompleto
