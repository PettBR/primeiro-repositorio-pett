/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes ou mais, preço normal de etiqueta mais juros de 10%
 */

/**
 * → Métodos de pagamento
 * Em dinheiro
 * Em cheque
 * No cartão
 */

/** 
 * As estruturas de Repetição, são estruturas que nos permitem repetir um código de uma maneira mais simples
 * */
// while → enquanto

// recebendo o preço do produto e transformando o valor para decimal
let precoProduto = parseFloat(prompt('Qual o preço do produto?'));
while(isNaN(precoProduto) || precoProduto <= 0) {
    alert("O preço digitado é inválido, Por favor informe o preço apenas com números; sem caracteres especiais");
    precoProduto = parseFloat(prompt('Qual o preço do produto?'));
};

const mensagem = `
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento com cartão
`;
let metodoDePagamento = parseInt(prompt(mensagem));



/*
Porque isso não funciona?
while(metodoDePagamento != 1 || metodoDePagamento != 2 || metodoDePagamento != 3){
    alert("Você digitou uma opção inválida. Por favor digite 1, 2 ou 3 de acordo com o método escolhido.");
    metodoDePagamento = parseInt(prompt(mensagem));
    console.log(metodoDePagamento);
}
*/

while(isNaN(metodoDePagamento) == true || metodoDePagamento > 3 || metodoDePagamento <= 0){
    alert("Você digitou uma opção inválida. Por favor digite 1, 2 ou 3 de acordo com o método escolhido.");
    metodoDePagamento = parseInt(prompt(mensagem));
}


/**Se metodoDePagamento = 1 ou 2 */
if (metodoDePagamento == 1 || metodoDePagamento == 2) {
const precofinal = (precoProduto*0.9)

// .toFixed(2) limita a 2 casas decimais
alert(`O preço final do pagamento é ${precofinal.toFixed(2)} reais.`) 
}
else if (metodoDePagamento == 3){
let parcelas = parseInt(prompt(`Pagamento em cartão escolhido:
Informe a quantidade de parcelas.`))
while(isNaN(parcelas) || parcelas < 1){
    alert("Você digitou uma opção inválida. Por favor digite o número de parcelas apenas com números; sem caracteres especiais.");
    parcelas = parseInt(prompt(`Pagamento em cartão escolhido:
Informe a quantidade de parcelas.`));
}
if (parcelas == 1) {
    const precofinal = (precoProduto*0.85)
    alert(`O preço final do pagamento é ${precofinal.toFixed(2)} reais à vista.`) 
}
else if(parcelas == 2){
    alert(`O preço final do pagamento é ${precoProduto.toFixed(2)} reais em ${parcelas} vezes de ${(precofinal/parcelas).toFixed(2)} reais.`)
}
else if(parcelas >= 3){
    const precofinal = (precoProduto*1.1)
    alert(`O preço final do pagamento é ${precofinal.toFixed(2)} reais em ${parcelas} vezes de ${(precofinal/parcelas).toFixed(2)} reais.`)
}
}
