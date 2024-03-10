alert('Boas vindas ao jogo do número secreto');
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 8;


if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era: ' +numeroSecreto);
}