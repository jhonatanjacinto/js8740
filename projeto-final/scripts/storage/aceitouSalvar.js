export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'));

export function setAceitouSalvar(valor) {
    aceitouSalvar = valor;
    localStorage.setItem('aceitouSalvar', valor);
}