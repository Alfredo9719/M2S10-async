console.log("Entro ejercicio 4");

//Esto es servidor
function cargarDatos(status, fuente) {
    return new Promise((resolve, reject)=>{
        if (status == "ok"){
            resolve(`Datos cargados correctamente desde ${fuente}`);
        }else {
            reject(`Datos cargados incorrectamente desde ${fuente}`);
        }
    });
}

//Esto es cliente
cargarDatos("ok", "http://fuente.de.los.deseos.com.mx")

.then((data)=>{
    console.log(data);
    console.log("resolvio promesa 1");
})
.catch((error)=>{
    console.log(error);
    console.error("Fallo promesa 1");
});

cargarDatos("error", "http://fuente.wikipedia.com.mx")
.then((data)=>{
    console.log(data);
    console.log("resolvio promesa 2");
})
.catch((error)=>{
    console.log(error);
    console.error("Fallo promesa 2");
});




