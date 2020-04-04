import Produto from "../model/Produto.js";
import { ProdutoError } from "../model/ProdutoError.js";

const listaProdutos = JSON.parse(sessionStorage.getItem('carrinho')) || [];

function validarProduto(produto)
{
    if (!produto.nome) {
        throw new ProdutoError('Nome do produto é obrigatório!');
    }

    if (isNaN(produto.quantidade) || produto.quantidade < 1) {
        throw new ProdutoError('Quantidade inválida! Informe um número maior que 0!');
    }

    if (isNaN(produto.precoUnitario) || produto.precoUnitario < 0) {
        throw new ProdutoError('Preço unitário inválido! Informe um número maior ou igual a 0!');
    }
}

export function adicionarProduto(nome, quantidade, precoUnitario)
{
    const produto = new Produto(nome, quantidade, precoUnitario);
    validarProduto(produto);
    let posicaoProduto = listaProdutos.findIndex(p => p.nome === produto.nome);

    if (posicaoProduto === -1) {
        listaProdutos.push(produto);
    }
    else {
        listaProdutos[posicaoProduto].quantidade = produto.quantidade;
    }

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

export function getQuantidadeTotal()
{
    return listaProdutos.reduce((acumulador, produto) => {
        return acumulador + produto.quantidade;
    }, 0);
}

export function getTotal()
{
    return listaProdutos.reduce((acumulador, produto) => {
        return acumulador + (produto.precoUnitario * produto.quantidade);
    }, 0);
}