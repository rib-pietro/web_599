// const nome = window.prompt('Qual seu nome?');

// console.log(nome);

// document.write('Meu primeiro JS');

const p = document.querySelector('p');

// p.innerText = 'Atribuído via JS';

// p.innerHTML = '<strong>Forte</strong>';

function hello() {
    alert('Alerta!!!!');
}

// const funcao = function () { // função anônima
//     alert('Alerta!!!!');
// };

// const funcao = () => { // arrow function
//     alert('Alerta!!!!');
// };

// funcao();

// function trackMouse($event) {
//     console.log(`x: ${$event.clientX}
// y: ${$event.clientY}`);
// }

// console.log(trackMouse);

// const infoPietro = {
//     'nome': 'Pietro',
//     'sobrenome': 'Ribeiro',
//     idade: 25,
//     'maior de idade': true,
//     pai: {
//         nome: 'Evandro',
//         sobrenome: 'Ribeiro',
//     },
//     minhaFuncao: function () { // função anônima
//         alert('Alerta!!!!');
//     }
// };

// infoPietro['temFilhos'] = false;

// console.log(infoPietro);

// infoPietro.minhaFuncao();




// function somar(a, b) {
//     return a + b;
// }

// const somar = (a, b) => a + b;
// const subtrair = (a, b) => a - b;
// const multiplicar = (a, b) => a * b;
// const dividir = (a, b) => a / b;

// const x = 5;
// const y = 7;

function consoleAny(anything) { // Função de alta ordem
    console.log(anything);
}

// const fazerOperacao = (funcaoOperacao, a, b) => funcaoOperacao(a, b);

// console.log(fazerOperacao(somar, x, y));

// console.log(somar(5, 7));
// console.log(subtrair(5, 2));
// console.log(multiplicar(3, 2));
// console.log(dividir(6, 2));
//           0  1  2  3
const arr = [9, 3, 5, 7];

// arr.forEach(consoleAny);

arr.forEach((val, ind) => {
    console.log(val * ind);
});