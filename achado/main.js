import { mudar_cenario } from "./mudar.js";
import { alterar_titulo } from "./mudar.js";

setInterval(() => {
    mudar_cenario();
    alterar_titulo();
}, 1000);