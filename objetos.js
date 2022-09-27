/**
 * Objeto é uma estrutura que permite organizar dados na forma de chave-valor
 */

end = {
    rua: 'Rua tal',
    numero: 466,
    estado: 'BH',
    complemento: 'Sem complemento',
    cep: '123000-000'
}

let pessoa = {
    nome: 'Felipe',
    idade: 30,
    cpf: '123.123.123-45',
    altura: 170,
    //  ... → operador Destructuring → como se pegasse uma cópia do objeto end, ou seja não alteraria ambos 
    endereco: { ...end },
    solteiro: true,
    habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    cumprimentar() {
        /**
         * Quando eu desejo referenciar o mesmo objeto dentro dele mesmo, utilizo a palavra chave 'this'
         */
        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`);
    }
}

// console.log(end);
// console.log(pessoa.habilidades[2]);
// console.log(pessoa.endereco.estado);

// pessoa.cumprimentar();
// pessoa.nome = 'Ainz';
// pessoa.cumprimentar();
// pessoa.habilidades.push('Angular');
// console.log(pessoa.habilidades);
// console.log(pessoa['cpf']);

console.log(end.rua);
console.log(pessoa.endereco.rua);
pessoa.endereco.rua = 'Rua secundária';

// como utilizei o operador ... Destructuring  → a modificação que fiz (pessoa.endereco.rua = 'Rua secundária';)
// só vai afetar o objeto pessoa.

console.log(pessoa.endereco.rua);
console.log(end.rua);