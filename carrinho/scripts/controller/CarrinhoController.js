import Produto from "../model/Produto.js";

const listaProdutos = JSON.parse(sessionStorage.getItem('carrinho')) || [];

function validarProduto(produto)
{
    if (!produto.nome) {
        throw new Error('Nome do produto é obrigatório!');
    }

    if (isNaN(produto.quantidade) || produto.quantidade < 1) {
        throw new Error('Quantidade inválida! Informe um número maior que 0!');
    }

    if (isNaN(produto.precoUnitario) || produto.precoUnitario < 0) {
        throw new Error('Preço unitário inválido! Informe um número maior ou igual a 0!');
    }
}

export function adicionarProduto(nome, quantidade, precoUnitario)
{
    const produto = new Produto(nome, quantidade, precoUnitario);
    validarProduto(produto);
    listaProdutos.push(produto);
    sessionStorage.setItem('carrinho', JSON.stringify(listaProdutos));
}

export function getProdutos() {
    return listaProdutos;
}

export function removerProduto(posicao)
{
    if (posicao < 0 || posicao > listaProdutos.length - 1) {
        throw new Error('Posição inválida! Não é possível remover este item da lista de produtos!');
    }
    listaProdutos.splice(posicao, 1);
    sessionStorage.setItem('carrinho', JSON.stringify(listaProdutos));
}

export function getTotal()
{

}