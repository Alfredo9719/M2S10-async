console.log("Entro ejercicio 2");

let loading = document.getElementById("loading");

function saludar(texto, callback) {
    const textoMayuscula = texto.toUpperCase();
    setTimeout(() => {
        callback("Hola: " + textoMayuscula);
    }, 4000);
}

function print(parametro) {
    console.log(parametro);
    // loading.style.display = "none";

}

// se fucionan las funciones de imprimir y saludar por medio del parametro callback y parametro
saludar("jesus", print);

console.log("Final");




