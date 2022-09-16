alert("Código funcionando") // mostrar uma mensagem para o usuário
const nomeUsuario = prompt("Olá usuário, qual o seu nome?") //mostra uma mensagem e recebe um valor do usuário
let num = Number(prompt("Olá, " + nomeUsuario + ". Digite algum número, por favor :)"))
 //Obs.: ao usar 
 //let num = prompt("Olá, " + nomeUsuario + ". Digite algum número, por favor :)")
 //a variável obtida pelo prompt é considerada um "string" 
//console.log(typeof num) //retorna o tipo do valor que a variável armazena number, string, etc

//Exemplo de maneira de apresentar sucessor e antecessor mais complicado
//const sucessor = num + 1        →
//const antecessor = num - 1      →
//alert ("O sucessor de " + num + " é " + sucessor)
//alert ("O antecessor de " + num + " é " + antecessor)

//operadores de incremento
//const sucessor = num++ // é o equivalente a =num + 1

console.log(num++) //operador de pós incremento → cospe o valor de num (exemplo 100) e depois faz o incremento de num (exemplo=101)
console.log(num) //mostraria o novo valor de num=101
console.log(++num) //incrementa antes e depois cospe o valor → mostraria o valor 102

//operadores de decremento
console.log(num--) //mostraria o valor atual de num (exemplo 102) e depois decrementa(num=101) 
console.log(num) //mostraria o valor atual de num (exemplo=101)
console.log(--num) //decrementaria primeiro o valor atual de num (exemplo=100) e depois mostraria → cospe 100