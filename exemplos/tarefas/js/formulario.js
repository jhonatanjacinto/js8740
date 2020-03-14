import { adicionarTarefa } from "./tarefas.js";
import { exibirTarefas } from "./exibicao.js";

btnAdicionar.onclick = () => {
    let item = tarefa.value.trim();
    if (item === '') {
        alert('Por favor, digite alguma coisa!!!');
    }
    else {
        adicionarTarefa(item);
        exibirTarefas();
    }
    tarefa.value = '';
    tarefa.focus();
}