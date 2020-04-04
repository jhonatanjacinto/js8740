import * as Carrinho from "../controller/CarrinhoController.js";
import { formataMoeda } from "../utils/formataMoeda.js";

$produtosTabela.addEventListener('click', (event) => {
    let posicao = event.target.dataset.posicao;
    if (posicao !== undefined) {
        Carrinho.removerProduto(posicao);
        exibirProdutos();
    }
});

exibirProdutos();

export function exibirProdutos()
{
    const listaProdutos = Carrinho.getProdutos();
    let totalDaCompra = Carrinho.getTotal();
    let quantidadeTotal = Carrinho.getQuantidadeTotal();
    let linhasTabela = '';

    listaProdutos.forEach((produto, indice) => {
        let totalItem = produto.precoUnitario * produto.quantidade;
        linhasTabela += `
            <tr>
                <td>${produto.nome}</td>
                <td>${formataMoeda(produto.precoUnitario)}</td>
                <td>${produto.quantidade}</td>
                <td>${formataMoeda(totalItem)}</td>
                <td>
                    <button data-posicao="${indice}" class="btn btn-danger">
                        X
                    </button>
                </td>
            </tr>
        `;
    });

    $produtosTabela.innerHTML = linhasTabela;
    $totalCompra.innerHTML = formataMoeda(totalDaCompra);
    $quantidadeItens.innerHTML = quantidadeTotal;
}