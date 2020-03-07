// @ts-check
const listaTarefas = [];

/**
 * Função que adiciona tarefas na lista
 * @param {string} tarefa Nome da tarefa a ser adicionada na lista
 * @returns {void}
 */
function adicionarTarefa(tarefa)
{
    let tarefaExiste = listaTarefas.find(tarefaLista => {
        return tarefaLista.localeCompare(tarefa, undefined, { sensitivity: 'base' }) === 0; 
    });

    if (tarefaExiste) {
        alert('Essa tarefa já existe na sua lista!');
    }
    else {
        listaTarefas.push(tarefa);
        alert('Tarefa adicionada com sucesso!');
    }
}

/**
 * Retorna a lista completa de tarefas
 * @returns {Array<string>}
 */
function getTarefas()
{
    return listaTarefas;
}

/**
 * Remove um item da lista de tarefas
 * @param {number} posicao Posição do item a ser removido no Array de tarefas
 * @returns {void}
 */
function removerTarefa(posicao)
{
    if (posicao < 0 || posicao >= listaTarefas.length) {
        alert('Posição fornecida é inválida!');
    }
    else {
        listaTarefas.splice(posicao, 1);
        alert('Tarefa removida com sucesso!');
    }
}
