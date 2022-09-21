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

// recebendo o preço do produto e transformando o valor para decimal
const precoProduto = parseFloat(prompt('Qual o preço do produto?'))
const mensagem = `
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento com cartão
`
const metodoDePagamento = prompt(mensagem)

console.log(precoProduto)
console.log(metodoDePagamento)
/**Se metodoDePagamento = 1 ou 2 */
if (metodoDePagamento == 1 || metodoDePagamento == 2) {
const precofinal = (precoProduto*0.9)

// .toFixed(2) limita a 2 casas decimais
alert(`O preço final do pagamento é ${precofinal.toFixed(2)} reais.`) 
}
else if (metodoDePagamento == 3){
const parcelas = parseInt(prompt(`Pagamento em cartão escolhido:
Informe a quantidade de parcelas.`))
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
else {
    alert(`Você não digitou um valor numérico para as parcelas.`)
}
}
else {alert(`Você não digitou nenhuma das opções.`)};
