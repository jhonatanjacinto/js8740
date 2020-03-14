import { paginaInicial } from "../storage/paginaInicial.js";
import { formataEndereco } from "../endereco/formataEndereco.js";
import { carregarPagina } from "./carregarPagina.js";

let paginaAtual = sessionStorage.getItem('paginaAtual');
paginaAtual = !paginaAtual ? paginaInicial : paginaAtual;

let enderecoCarregar = formataEndereco(paginaAtual);
carregarPagina(enderecoCarregar);

$janelaPrincipal.addEventListener('load', function() {
    let endereco = $janelaPrincipal.contentWindow.location.href;
    sessionStorage.setItem('paginaAtual', endereco);
});