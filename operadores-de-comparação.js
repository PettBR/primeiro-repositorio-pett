/**
 * operadores de comparação 
 */

//verdadeiro(true) ou falso (false)

// igualdade
const msg = "Eu sou uma mensagem";
const msg2 = "Eu sou outra mensagem";
//comparação entre 'msg' e 'msg2'
console.log(msg == msg2); //cospe false

const num1 = 5;
const num2 = 5;
console.log(num1 == num2); //cospe true

let a = 78; // 78 (number)
let b = '78'; // 78 (string)
console.log(a == b); //cospe true, porque no JS ele compara o conteúdo de ambas variáveis

//Idênticos (conteúdo e tipo)
console.log (a === b); //cospe false, pois as variáveis tem tipagem diferente
console.log(typeof a); //number
console.log(typeof b); //string

//Diferença

console.log(msg != msg2); //true
console.log(a != b); //false (conteúdo é igual, apesar da tipagem ser diferente); o != só compara o conteúdo
console.log (a !== b); //true (conteúdo é igual, mas tipagem é diferente); o !== compara a tipagem também.

//comparação de tamanhos
a = 56
b = 30
console.log(a > b) //true
let c = 500
let d = 500
console.log(c >= d) //true
console.log(3 > 6) //false
console.log(3 < 7.5) //true
console.log(7.5 < 7.5) //false
console.log (8 <= 8) // true

