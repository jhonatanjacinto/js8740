import * as historico from "./historico.js";
import { carregarPagina } from "./carregarPagina.js";

$janelaPrincipal.addEventListener('load', () => {
    let endereco = $janelaPrincipal.contentWindow.location.href;
    historico.adicionar(endereco);
});

$btnVoltar.addEventListener('click', () => {
    let endereco = historico.voltar();
    if (endereco) {
        carregarPagina(endereco);
    }
});

$btnAvancar.addEventListener('click', () => {
    let endereco = historico.avancar();
    if (endereco) {
        carregarPagina(endereco);
    }
});