import "./index.css";

// Parte que conecta as outras Mini-Partes
const texto_click = document.getElementById("Texto_Principal");
let clicks = 0;

texto_click.addEventListener("click", () => {
    if (clicks === 3) {
        window.location.href = "./achado/";
    } else {
        clicks++;
    }
});