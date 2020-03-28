import { Endereco } from "../endereco/Endereco.js";

export function carregarPagina(endereco)
{
    if (typeof endereco === 'string') {
        endereco = new Endereco(endereco);
    }
    else if (endereco instanceof Endereco === false) {
        throw new Error(`
            Você passou um dado que não representa um objeto do tipo Endereco:
            Valor: ${JSON.stringify(endereco)}
            Tipo: ${typeof endereco}
        `);
    }

    $janelaPrincipal.src = endereco;
    $inputEndereco.value = endereco;
}