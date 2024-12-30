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

document.getElementById('vem7').innerHTML = 
'O "let" é como se fosse o "var", mas o "let" ira respeitar o valor da variavel em seu escopo, exemplo;<br> let x = 2<br>Neste caso x sempre vai valer 2,{let x = 10} agora temos um x que vale 2 e outro que vale 10, porem cada um em seu escopo'

document.getElementById('vem8').innerHTML = 'Já o "const" é uma constate, ou seja inauteravel independente de onde esteja no codigo'