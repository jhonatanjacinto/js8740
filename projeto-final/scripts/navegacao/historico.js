const listaSites = JSON.parse(sessionStorage.getItem('historico')) || [];
let posicao = JSON.parse(sessionStorage.getItem('posicaoHistorico')) || -1;

export function adicionar(endereco)
{

}

export function voltar()
{
    if (posicao > 0) 
    {
        posicao--;
        sessionStorage.setItem('posicaoHistorico', posicao);
        return listaSites[posicao];
    }
}

export function avancar()
{
    if (posicao < listaSites.length - 1) {
        posicao++;
        sessionStorage.setItem('posicaoHistorico', posicao);
        return listaSites[posicao];
    }
}