import { carregarPagina } from "./carregarPagina.js";
import { Endereco } from "../endereco/Endereco.js";
import { CakeEnderecoInvalidoError } from "../erros/CakeEnderecoInvalidoError.js";

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
        try {
            endereco = new Endereco($inputEndereco.value);
            carregarPagina(endereco);
        }
        catch(erro) {
            if (erro instanceof CakeEnderecoInvalidoError) {
                alert(erro.message);
            }
            else {
                console.error(erro);
            }
        }
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