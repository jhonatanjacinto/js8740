import { paginaInicial, setPaginaInicial } from "./storage/paginaInicial.js";
import { aceitouSalvar, setAceitouSalvar } from "./storage/aceitouSalvar.js";
import { formataEndereco } from "./endereco/formataEndereco.js";

$inputPaginaInicial.value = paginaInicial;
$inputPermitiuSalvar.checked = aceitouSalvar;

$btnSalvar.onclick = () => {
    let permitiuSalvar = $inputPermitiuSalvar.checked;
    let paginaNova = formataEndereco($inputPaginaInicial.value);
    setPaginaInicial(paginaNova);
    setAceitouSalvar(permitiuSalvar);
    alert('Configurações salvas com sucesso!');
    window.location.reload();
}

$btnLimpar.onclick = () => {
    sessionStorage.clear();
    const chavesPermanentes = ['aceitouSalvar', 'aceitouTermos'];
    const chaves = Object.keys(localStorage).filter(chave => !chavesPermanentes.includes(chave));
    chaves.forEach(chave => localStorage.removeItem(chave));
    alert('Configurações foram excluídas com sucesso!');
    window.location.reload();
}