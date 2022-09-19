/**
 * Operadores lógicos
 */

// E (And) - &&

//V → verdadeiro
//F → falso

/**
 * V V → V
 * F V → F
 * V F → F
 * F F → F
 */

//exemplo: média precisa ser acima de 7 E(&&) preciso ter, no mínimo 80% de presença.
const media = (7 + 10 + 10) / 3
const presença = 0.95
console.log(media >= 7 && presença >=0.8) //true

// Operador Ou (Or) - ||
/**
 * V V → V
 * V F → V
 * F V → V
 * F F → F
 */

console.log(4 > 7 || 3 < 2) //false
console.log(5 > 3.5 || 7 > 8) //true

//exemplo: uma empresa que aceita contratação de SP ou MG
const estado = "MG"
console.log(estado == "SP" || estado == "MG")
//exemplo: se for maior de 16 ou menor de 60 o voto é obrigatório
const idade = 30
console.log(idade >= 16 || idade < 60)

//Operador Não (Not) - !

/**
 * NOT V → F
 * NOT F → V
*/

const resultado = 5 < 3
console.log(!resultado)

const logado = false
console.log(logado)
if (!logado) {
    console.log("Você não pode acessar o site!")
}
console.log(logado)