import { paginaInicial } from "../storage/paginaInicial.js";
import { carregarPagina } from "./carregarPagina.js";

$btnHome.onclick = () => {
    carregarPagina(paginaInicial);
}