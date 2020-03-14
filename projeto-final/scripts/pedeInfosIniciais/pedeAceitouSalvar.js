import { aceitouSalvar, setAceitouSalvar } from "../storage/aceitouSalvar.js";

if (aceitouSalvar === null) {
    let aceitou = confirm("Você aceita que a gente salve suas informações?");

    if (!aceitou) {
        alert('Você pode mudar isso na página de configurações mais tarde!');
    }

    setAceitouSalvar(aceitou);
}