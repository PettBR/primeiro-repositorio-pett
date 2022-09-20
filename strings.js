//Delimitação de strings (com '' ou "" ou ``)

//com aspas simples ou duplas preciso de caracteres de escape para, por exemplo, colocar quebra de linha
const aspassimples = 'Olá,mundo'
//console.log(aspassimples)

//Caracteres de escape \n ;
const aspasduplas = "Olá eu sou o\nJavascript. Eu sou melhor que o\nPython"
//console.log(aspasduplas)

//Com crase todas as quebras de linhas já são colocadas sem erro por separar as linhas
const textocomcrase = `Olá eu sou o 
Javascript. Eu 
sou 
melhor que 
o Python`
//console.log(textocomcrase)

// métodos das strings
const texto = 'O Javascript foi criado alguns anos após o Python. No entanto, o Javascript é bem mais bacana. Estou aprendendo javascript'
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
// .concat = concatenação
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.'))
console.log('A linguagem C é a mãe de todas as linguagens. '.concat(texto))
//conta a partir do carectere 0, ou seja o caracter 0 é = "O", o caracter 1 é " " e o caracter 2 = "J"
console.log(texto[2]) 
//console.log(texto[2], texto[43]); carecter 2 e carecter 43: "J" e "P"

//substring recorta uma parte do meu texto. No caso ele pode receber o valor de start e e de end.
console.log(texto.substring(2,12))
console.log(texto.replace('Javascript','Rust')) // .replace substitui a PRIMEIRA ocorrência da pesquisa
console.log(texto.replaceAll('Javascript','Rust')) // .replaceAll substitui todas as ocorrências da pesquisa (Case sensitive!)
console.log(texto.replace(/Javascript/g,"PHP")) // .replace(/blabla/g) substitui global todas as aparições da palavra "Javascript", Case sensitive 
console.log(texto.replace(/Javascript/gi,"PHP")) // .replace(/blabla/gi) também substitui global todas as aparições da palavra "Javascript", mas IGNORA o Case sensitive 

const html = '<!DOCTYPE html>\n<html></html>' //início de todo arquivo HTML
console.log(html.startsWith('<!DOCTYPE html>\n<html></html>')) // Aponta o valor booleano (no caso, TRUE). É uma maneira de filtrar arquivos que começam com a string '<!DOCTYPE html>\n<html></html>', que todo HTML começa com.

console.log(html.endsWith('</body>')) // Aponta o valor booleano (no caso, FALSE) se a variável termina com o valor dentro dos parenteses .endsWith()

const mensagem = '                                          Olá, mundo!       ' //string com vários espaços excedentes no inicio e fim
console.log(mensagem)
console.log(mensagem.trim()) //comando trim remove excesso de espaços no inicio e fim da string

let senha = 'sonic'

console.log(senha.length) // dá o valor do tamanho da string - no caso, 5
console.log(senha.length >= 8) //verifica se o comprimento da string é maior ou igual a 8