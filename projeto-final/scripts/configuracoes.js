import { paginaInicial, setPaginaInicial } from "./storage/paginaInicial.js";
import { aceitouSalvar, setAceitouSalvar } from "./storage/aceitouSalvar.js";
import { Endereco } from "./endereco/Endereco.js";
import { CakeEnderecoInvalidoError } from "./erros/CakeEnderecoInvalidoError.js";

$inputPaginaInicial.value = paginaInicial;
$inputPermitiuSalvar.checked = aceitouSalvar;

$btnSalvar.onclick = () => {
    try {
        let permitiuSalvar = $inputPermitiuSalvar.checked;
        let paginaNova = new Endereco($inputPaginaInicial.value);
        setPaginaInicial(paginaNova);
        setAceitouSalvar(permitiuSalvar);
        alert('Configurações salvas com sucesso!');
        window.location.reload();
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

$btnLimpar.onclick = () => {
    sessionStorage.clear();
    const chavesPermanentes = ['aceitouSalvar', 'aceitouTermos'];
    const chaves = Object.keys(localStorage).filter(chave => !chavesPermanentes.includes(chave));
    chaves.forEach(chave => localStorage.removeItem(chave));
    alert('Configurações foram excluídas com sucesso!');
    window.location.reload();
}