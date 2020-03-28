import { formataEndereco } from "./formataEndereco.js";

export function Endereco(endereco)
{
    let enderecoCompleto;
    let enderecoResumido;

    if (!this instanceof Endereco) {
        return new Endereco(endereco);
    }

    let enderecoCorrigido = formataEndereco(endereco);

    if (enderecoCorrigido === 'blank') {
        enderecoCompleto = enderecoCorrigido;
        enderecoResumido = enderecoCorrigido;
    }
    else {
        const url = new URL(enderecoCorrigido);
        enderecoCompleto = url.toString();
        enderecoResumido = url.hostname;
    }

    this.urlCompleta = enderecoCompleto;
    this.urlResumida = enderecoResumido;
}

Endereco.prototype.toString = function() {
    return this.urlCompleta;
}