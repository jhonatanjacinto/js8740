export function formataEndereco(endereco)
{
    if (!endereco) {
        return 'blank';
    }

    let regex = /^https?:\/\/(.+)?/;
    if (!regex.test(endereco)) {
        endereco = 'http://' + endereco;
    }

    return endereco;
}