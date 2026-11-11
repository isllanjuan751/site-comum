const texto = document.getElementById("Parabens");

// Mudar o cenario
export const mudar_cenario = () => {
    if (document.body.style.backgroundColor === "yellow") {
        document.body.style.backgroundColor = "gray";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
};

// Mudar a cor do titulo
export const alterar_titulo = () => {
    if (texto.style.color === "blue") {
        texto.style.color = "green";
    } else {
        texto.style.color = "blue";
    }
};