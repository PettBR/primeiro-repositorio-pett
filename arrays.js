/**
 * Arrays (ou vetores) são um tipo especial que te permite armazenar diversos valores em apenas um local
 */

/* Criando um Array:*/
// let arr = new Array();
/* Criando um Array com um Tamanho INICIAL - Obs.: Pode ser aumentada e dimnuída  */
// let arr2 = new Array(5);

//Mais utilizada: let arr3 = []
/**Cada valor de um array é separado por vírgula
 * 
 * Dentro de um array eu posso ter vários tipos de dados
 */
//Obs.: array dentro de array = matriz

/**
 * Posições de um array
 * 
 * → Cada posição é representada por um número
 * → A primeira posição de um Array é a posição 0
 */
let arr = [10, 15, 9.8, 'Batata', 'Olá, Mundo', true, false, false]; 
// posição 0 → 10 ; posição 1 → 15 ; 
/*Mostra todo o array (toda a lista)
//console.log(arr);
*/
console.log(arr[4]); // retorna 'Olá mundo'
/* Sempre que você tentar recuperar uma posição que não existe, ele informará o valor undefined */
console.log(arr[20]); // retorna undefined
// Modificando um valor de dentro do array
console.log(arr[6]); //o vaor da posição 6 = false
arr[6] = 'Não sou mais o valor booleano false, agora sou essa string'
console.log(arr[6]); // Texto novo
console.log(arr[8]); // Undefined
arr[8] = 'Agora a posição 8 existe dentro de arr'
console.log(arr);