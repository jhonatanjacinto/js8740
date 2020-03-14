//@ts-check
import { getTarefas, removerTarefa } from "./tarefas.js";

/**
 * Exibe a lista de tarefas na DOM para o Usuário
 * @returns {void}
 */
export function exibirTarefas()
{
    let listaDeTarefas = getTarefas();
    let itensHtml = '';

    listaDeTarefas.forEach((tarefa, indice) => {
        itensHtml += `
            <p>
                ${tarefa}
                <button data-posicao="${indice}">
                    Excluir
                </button>
            </p>
        `;
    });

    if (listaDeTarefas.length === 0) {
        mostradorLista.innerHTML = 'Nenhuma tarefa foi adicionada ainda :(';
    }
    else {
        mostradorLista.innerHTML = itensHtml;
    }
}

mostradorLista.onclick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        // dataset = data-*
        let posicao = parseInt(event.target.dataset.posicao);
        removerTarefa(posicao);
        exibirTarefas();
    }
}