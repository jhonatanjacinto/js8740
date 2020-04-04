import * as ContatoController from "../controller/ContatoController.js";
import ContatoError from "../model/ContatoError.js";

listarContatosTabela();
export function listarContatosTabela()
{
    const contatos = ContatoController.getContatos();
    let linhasTabela = '';

    contatos.forEach((contato, indice) => {
        linhasTabela += `<tr>
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td>
                <button data-indice="${indice}" class="btn btn-danger">
                    <i style="pointer-events: none;" class="fas fa-times"></i>
                </button>
            </td>
        </tr>
        `;
    });

    tabelaContatos.innerHTML = linhasTabela;
}

tabelaContatos.onclick = ({ target: { dataset: { indice }  }}) => {
    try {
        if (indice !== undefined) {
            ContatoController.excluirContato(indice);
            listarContatosTabela();
        }
    }
    catch(erro) {
        if (erro instanceof ContatoError) {
            alert(erro.message);
        }
        else {
            console.error(erro);
        }
    }
}