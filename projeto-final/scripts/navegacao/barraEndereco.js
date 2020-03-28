import { carregarPagina } from "./carregarPagina.js";
import { Endereco } from "../endereco/Endereco.js";

let endereco;

$inputEndereco.onfocus = exibirEnderecoCompleto;
$inputEndereco.onmouseenter = exibirEnderecoCompleto;
$inputEndereco.onblur = exibirEnderecoResumido;
$inputEndereco.onmouseleave = exibirEnderecoResumido;
$janelaPrincipal.addEventListener('load', () => {
    endereco = new Endereco($janelaPrincipal.contentWindow.location.href);
});
$janelaPrincipal.addEventListener('load', exibirEnderecoResumido);

$inputEndereco.addEventListener('keypress', ({ key }) => {
    if (key === 'Enter') {
        endereco = new Endereco($inputEndereco.value);
        carregarPagina(endereco);
    }
});

function exibirEnderecoCompleto()
{
    $inputEndereco.value = endereco.urlCompleta;
}

function exibirEnderecoResumido()
{
    $inputEndereco.value = endereco.urlResumida;
}