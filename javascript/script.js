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



// const x = 5;
// const y = 7;

// function consoleAny(anything) { // Função de alta ordem
//     console.log(anything);
// }

// const fazerOperacao = (funcaoOperacao, a, b) => funcaoOperacao(a, b);

// console.log(fazerOperacao(somar, x, y));

// console.log(somar(5, 7));
// console.log(subtrair(5, 2));
// console.log(multiplicar(3, 2));
// console.log(dividir(6, 2));
//           0  1  2  3


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (const ind in arr) {
//     console.log(arr[ind]);
// }

// for (const iterator of object) {
    
// }

// arr.forEach(consoleAny);

// arr.forEach((val, ind) => {
//     console.log(val * ind);
// });




// const nomeBuscado = prompt('Qual o seu nome?');

// let encontreiNome;

// listaNomes.forEach(nome => {
    //     if (nome === nomeBuscado) {
        //         encontreiNome = true;
//     }/* else {
    //         encontreiNome = false;
    //     }*/
    // });
    
    // const listaMatriculas = [
        //     {
//         nome: 'André',
//         curso: 'Web Front-End'
//     },
//     {
//         nome: 'Alexandre',
//         curso: 'Python Pro'
//     },
//     {
//         nome: 'Carol',
//         curso: 'Web Front-End'
//     },
//     {
    //         nome: 'Flávia',
    //         curso: 'UI & UX Design'
//     },
//     {
    //         nome: 'Carol',
    //         curso: 'Python Pro'
    //     },
    // ];
    
    // const encontrei = listaMatriculas.find(matricula => matricula.nome === 'Flávia');
    
    // if (encontrei) {
        //     alert('Achei');
        // } else {
            //     alert('Não achei');
            // }
            
// // alert('');

// const nums1 = [10, 20, 30, 40, 50];
// const nums2 = [11, 20, 30, 40, 50];

// const is10Multiple = num => num % 10 === 0;

// console.log(nums1.every(is10Multiple));
// console.log(nums2.every(is10Multiple));


// let arr = [9, 3, 5, 7, 10];

// console.log(arr);

// arr = arr.map(x => x * 2);

// // arr.forEach(val => {
// //     val = 10;
// // });

// console.log(arr);


// const arr = contatos.map(c => {
    //     return {
        //         nome: c.nome,
        //         telefone: c.telefone,
//         description: `Olá, meu nome é ${c.nome}, você pode me ligar no número ${c.telefone}`
//     };
// }).map(c => {
    //     return {
//         description: c.description
//     }
// });

// const nums2 = [11, 20, 31, 40, 50];

// const arr = nums2.filter(n => n < 30);


// const contatos = [
//     { nome : 'Alexandre Heringer', telefone : '000000000'},
//     { nome : 'André', telefone : '111111111'},
//     { nome : 'Carol', telefone : '222222222'},
//     { nome : 'Flávia', telefone : '333333333'},
//     { nome : 'Gustavo', telefone : '444444444'},
// ];

// const nomeBuscado = prompt('Qual o nome você procura?').toLowerCase().trim();

// const arr = contatos.filter(contato => {
//     const temNomeBuscado = contato.nome.toLowerCase().indexOf(nomeBuscado) !== -1;
//     return temNomeBuscado;
// });

// console.log(arr);

// const valores = [
//     { timestamp: '15/04/2020', open: 90, close: 70 },
//     { timestamp: '16/04/2020', open: 92, close: 74 },
//     { timestamp: '17/04/2020', open: 91, close: 76 },
//     { timestamp: '18/04/2020', open: 80, close: 75 },
//     { timestamp: '19/04/2020', open: 30, close: 20 },
//     { timestamp: '20/04/2020', open: 10, close: 5 },
//     { timestamp: '21/04/2020', open: 100, close: 70 },
// ];

function getXAndY(valor) {
    return {
        x: valor.timestamp,
        y: valor.open - valor.close
    };
}

// const infoGrafico = valores.map(getXAndY);

// console.log(infoGrafico);

// const nums = [10, 20, 30, 40, 50];

// const soma = nums.reduce((somaAtual, valorAtual) => {
//     return somaAtual * valorAtual;
// });

const skills = ['Python'];

const description = skills.reduce((prevSk, currSk) => {
    return `${prevSk}, ${currSk}`;
});

// let soma = 0;

// nums.forEach(n => {
//     soma += n;
// });

// console.log(description);

const get = (...x) => x;
const consoleAny = x => { console.log(x); };

const compose = (fn1, fn2) => function(){ return fn2(fn1(...arguments)) };
const print = compose(get, consoleAny);
// print("10.5", 20); // 11

function sumAll(...nums) {
    return nums.reduce((prev, curr) => prev + curr);
}

console.log(sumAll(5, 3, 2, 8));