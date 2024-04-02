let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoClicado() {
    console.log('O botão foi clicado!')
}

function alertaJS() {
    alert('Eu amo JS!')
}

function cidadeBR() {
    var cidade = prompt('Cite uma cidade?')
    alert('Estive em '+cidade+' e lembrei de você!')
}

function soma() {
    var num1 = parseInt(prompt('Digite um número:'));
    var num2 = parseInt(prompt('Digite outro número:'));
    alert('A soma dos números é: '+(num1+num2))
}