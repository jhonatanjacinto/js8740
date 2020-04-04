import { adicionarContato } from "../controller/ContatoController.js";
import { listarContatosTabela } from "./tabela.js";
import ContatoError from "../model/ContatoError.js";

btnSalvar.onclick = () => {
    try {
        let nome = inputNome.value.trim();
        let telefone = inputTelefone.value.trim();
        adicionarContato(nome, telefone);
        listarContatosTabela();
        inputNome.value = '';
        inputTelefone.value = '';
    }
    catch(erro) {
        if (erro instanceof ContatoError) {
            alert(erro.message);
        }
        else {
            alert('Um erro aconteceu na aplicação. Contate o administrador do sistema!');
            console.error(erro);
        }
    }
}