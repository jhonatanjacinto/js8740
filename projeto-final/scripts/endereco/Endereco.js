import { formataEndereco } from "./formataEndereco.js";
import { CakeEnderecoInvalidoError } from "../erros/CakeEnderecoInvalidoError.js";

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
        let url;
        try {
            url = new URL(enderecoCorrigido);
            enderecoCompleto = url.toString();
            enderecoResumido = url.hostname;
        }
        catch(erro) {
            throw new CakeEnderecoInvalidoError(enderecoCorrigido);
        }
    }

    this.urlCompleta = enderecoCompleto;
    this.urlResumida = enderecoResumido;
}

Endereco.prototype.toString = function() {
    return this.urlCompleta;
}