import * as Carrinho from "../controller/CarrinhoController.js";
import { formataMoeda } from "../utils/formataMoeda.js";

exibirProdutos();

export function exibirProdutos()
{
    const listaProdutos = Carrinho.getProdutos();
    let linhasTabela = '';

    listaProdutos.forEach(produto => {
        let totalItem = produto.precoUnitario * produto.quantidade;
        linhasTabela += `
            <tr>
                <td>${produto.nome}</td>
                <td>${formataMoeda(produto.precoUnitario)}</td>
                <td>${produto.quantidade}</td>
                <td>${formataMoeda(totalItem)}</td>
                <td>
                    <button class="btn btn-danger">
                        X
                    </button>
                </td>
            </tr>
        `;
    });

    $produtosTabela.innerHTML = linhasTabela;
}