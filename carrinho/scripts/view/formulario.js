import { formataMoeda } from "../utils/formataMoeda.js";
import * as Carrinho from "../controller/CarrinhoController.js";
import * as Tabela from "./tabela.js";

$btnForm.onclick = () => {
    let nome = $produto.value.trim();
    let precoUnitario = $valorUnitario.value.trim();
    let quantidade = parseInt($quantidade.value.trim());
    precoUnitario = parseFloat(precoUnitario.replace(/(R\$ ?|\.)/g, "").replace(',', '.'));

    try {
        Carrinho.adicionarProduto(nome, quantidade, precoUnitario);
        Tabela.exibirProdutos();
        $produto.value = '';
        $valorUnitario.value = 'R$ 0,00';
        $quantidade.value = 1;
    }
    catch(erro) {
        alert(erro.message);
        console.error(erro);
    }
}

$produto.onchange = () => {
    let indice = $produto.selectedIndex;
    let preco = $produto.options[indice].dataset.preco;
    if (preco !== undefined) {
        $valorUnitario.value = formataMoeda(preco);
    }
    else {
        $valorUnitario.value = 'R$ 0,00';
    }
}