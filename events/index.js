/**
 * Criar uma função responsável por mostrar o alerta criado na classe (.mostrar) no CSS
 */

function mostrarAlerta(){
    /**
     * O objeto document é um objeto que faz uma representação do HTML do seu site dentro do Javascript
     */

    /**
     * getElementById serve para recuperar um elemento HTML pelo seu id
     */
    /**
     * A propriedade classList retorna um array com todas as classes CSS que um element possui
     */

    const divAlerta = document.getElementById('alerta');
    divAlerta.classList.add('mostrar');
    let tagSpan = document.getElementById('display')
    count++;
    tagSpan.innerHTML = `${count}`
}

/**
 * classList.remove() remove uma classe dinamicamente de dentro de um elemento HTML
 */

function fecharAlerta() {
    const divAlerta = document.getElementById('alerta');
    divAlerta.classList.remove('mostrar');
}

let count = 0;

const btnMostrar = document.getElementById('mostrar');
const btnFechar = document.getElementById('fechar');

/**
 * addEventListener é um método que te permite ouvir eventos do HTML pelo Javascript
 */

/**
 * Se eu precisar passar uma função como parâmetro para outra eu passo a refeência dela, ou seja, a função sem os parenteses na frente
 */
btnMostrar.addEventListener('click', mostrarAlerta);
btnFechar.addEventListener('click', fecharAlerta);


