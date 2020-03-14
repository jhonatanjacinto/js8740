import { formataEndereco } from "../endereco/formataEndereco.js";
import { carregarPagina } from "./carregarPagina.js";

$inputEndereco.onfocus = exibirEnderecoCompleto;
$inputEndereco.onmouseenter = exibirEnderecoCompleto;
$inputEndereco.onblur = exibirEnderecoResumido;
$inputEndereco.onmouseleave = exibirEnderecoResumido;
$janelaPrincipal.addEventListener('load', exibirEnderecoResumido);
$inputEndereco.addEventListener('keypress', ({ key }) => {
    if (key === 'Enter') {
        let endereco = formataEndereco($inputEndereco.value);
        carregarPagina(endereco);
    }
});

function exibirEnderecoCompleto()
{
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href;
}

function exibirEnderecoResumido()
{
    const url = new URL($janelaPrincipal.contentWindow.location.href);
    $inputEndereco.value = url.hostname;
}