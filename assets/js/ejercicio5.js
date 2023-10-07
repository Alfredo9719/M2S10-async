console.log("Entro ejercicio 5");

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
const promesa1 = cargarDatos("ok", "http://fuente.de.los.deseos.com.mx");
const promesa2 = cargarDatos("ok", "http://fuente.wikipedia.com.mx");


//Saldra el mensaje de error por que necesitan estan estar las dos promesas en resuelta
Promise.all([promesa1,promesa2])
.then((data)=>{
    console.log("Resolvio las promesas");
})
.catch((error)=>{
    console.log("No resolvio las promesas");
})

