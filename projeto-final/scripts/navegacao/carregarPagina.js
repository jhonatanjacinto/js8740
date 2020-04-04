import { Endereco } from "../endereco/Endereco.js";

export async function carregarPagina(endereco)
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

    try {
        await fetch(endereco);
        $janelaPrincipal.src = endereco;
        $inputEndereco.value = endereco;
    }
    catch(erro) {
        alert('Não foi possível carregar o endereço: ' + endereco);
    }   
}