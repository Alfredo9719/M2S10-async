console.log("Entro index.js");

function saludar(texto, callback) {
    const textoMayuscula = texto.toUpperCase();
    callback(textoMayuscula); //funcion dentro de funcion
}

function print(parametro) {
    console.log(parametro);
}

// se fucionan las funciones de imprimir y saludar por medio del parametro callback y parametro
saludar("jesus", print);

