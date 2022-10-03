/**
 * métodos de recuperação de elements HTML
 */

// const todoForm = document.getElementsByTagName('form')[0];
// console.log(todoForm);

const todoForm = document.getElementById('todo-form');
const todos = [];

/**
 * addEventListener serve para ouvir eventos de elemntos HTML semore que forem emitidos
 */
/* usamos uma função anônima para passá-la como parâmetro para outra
*/

todoForm.addEventListener('submit', function(evento) {

/**
   * cancela o comportamento padrão de um formulário
   * que seria o recarregamento da página tentando fazer seu envio
   */
evento.preventDefault();

/**
   * cancela a propagação do evento que foi emitido para os elementos pai,
   * evitando que outros eventos sejam emitidos
   */
evento.stopPropagation();

/**
 * querySelector recupera o primeiro elemento que atenda a um seletor CSS informado. Ou seja: querySelector(input#todo) se eu quiser ser mais específico ou só o (#todo) pra pegar por id. Se eu quiser classe, uso .nomeDaClasse igual ao CSS.*/
    const todoInput = document.querySelector('#todo');
    /**
     * a propriedade value é uma propriedade que representa o atributo value dos elementos de formulário do HTML, para acessarmos o valor que está dentro deles.
     */
    todos.push(todoInput.value);
    todoInput.value = ''; //clear
    renderizarTodos();
});

function renderizarTodos() {
    const todosListSection = document.querySelector('#todos-list');
    todosListSection.innerHTML = "" //clear nas caixas anteriores ao alocar (nova tarefa + anteriores)

    for(let tarefa of todos){
        /**
         * createElement é o método responsável por gerar novos elementos HTML dentro do Javascript a partir do nome das tags
         */
        const divCard = document.createElement('div');
        divCard.classList.add('card','bg-warning');
        
        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center');

        const pTodoText = document.createElement('p');
        pTodoText.classList.add('todo-text','flex-grow-1', 'text-truncate');
        /**
         * innerText é a propriedade que informa qual o contéudo de texto que está dentro de um elemento HTML
         */
        pTodoText.innerText = tarefa;

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn', 'delete-todo');
        /**
         * Arrow functions () => {} SEMPRE são anônimas
         */
        btnDelete.addEventListener('click', () => {
            /**
             * Descobrir o índice do elemento dentro do array
             * O indexOf informa em qual índice se encontra um determinado valor dentro do seu array
             * se ele não achar o valor dentro do array ele retorna -1
             */
            const index = todos.indexOf(tarefa);
            /**
             * splice serve para excluir um determinado valor do seu array a partir do seu index
             * O primeiro parâmetro indica a partir de que ponto ele vai excluir items do array
             * O segundo parâmetro indica quantos excluir
             */
            todos.splice(index,1);
            renderizarTodos();
            console.log(todos);
        })

        const spanIcon = document.createElement('span');
        spanIcon.classList.add('material-symbols-outlined');
        spanIcon.innerText = 'delete';

        // colocando cada tag filha em sua tag pai
        /**
         * appendChild serve para colocar novos elementos HTML dentro de outros
         */
        btnDelete.appendChild(spanIcon);
        /**
         * append serve para colocar um ou mais elementos HTML dentro do outro
         */
        divCardBody.append(pTodoText, btnDelete);
        divCard.appendChild(divCardBody);
        todosListSection.appendChild(divCard);
    }
}
