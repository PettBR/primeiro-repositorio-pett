/**
 * Funções são blocos de construção fundamentais em Javascript. Uma função é um procedimento de Javascript 
 * - um conjunto de instruções que executa uma tarefa ou um valor. Para usar uma função, você deve 
 * definí-la em algum lugar no escopo do qual voce quiser chamá-la.
 */

/**
 * Parâmetros
 * 
 * São valores que passamos para as funções para que elas utilizem esses valores dentro delas
 */

// passar um valor como parâmetro para mostrá-lo dentro do alert

// function cumprimentar(mensagem){
//     document.write(`<p>${mensagem,}</p>`);
// }

function cumprimentar(mensagem, repetir = 1){
    for (let i=1; i<= repetir; i++){
        alert(mensagem);
    }
};

function soma(num, num2){
    /**
     * O return serve para enviar o resultado da execução daquela função.
    */
return num + num2
};

// soma(7.5, 7);
// soma(5, 2);

let resultado = soma(4, 7);
console.log(`O valor da variável resultado é ${resultado}`)

function maiorValor(a,b){
    if(a > b){
        return a
    } else {
        return b
    }
}

const num1 = parseInt(prompt('Informe o primeiro número'))
const num2 = parseInt(prompt('Informe o segundo número'))

alert(`O maior número entre esses é ${maiorValor(num1, num2)}`);


/**
 * Na execução de uma função coloco os 'Argumentos' para os parâmetros
 * cumprimentar(Argumento1 , Argumento2)
 */

// cumprimentar('Olá mundo', 2);
// cumprimentar('Não coloquei um argumento para o repetir, mas como repetir = 1 na função ele vai mostrar por padrão: 1')
// // cumprimentar('Eu gosto de batata');
// // cumprimentar('Valor armazenado no parâmetro mensagem')

