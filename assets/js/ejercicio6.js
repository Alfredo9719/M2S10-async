console.log("Entro ejercicio 6");

//Esto es servidor
function cargarDatos(status, fuente) {
    return new Promise((resolve, reject)=>{
        if (status == "ok"){
            setTimeout(()=>{
                resolve(`Datos cargados correctamente desde ${fuente}`);
                console.log("Promesa resulta");
            },2000);
        }else {
            setTimeout(()=>{
                reject(`Datos cargados incorrectamente desde ${fuente}`);
                console.log("promesa fallida");
            },4000);
        }
    });
}

//Esto es cliente
const promesa1 = cargarDatos("ok", "http://fuente.de.los.deseos.com.mx");
const promesa2 = cargarDatos("error", "http://fuente.wikipedia.com.mx");


(async()=>{
  try {
    const respuesta = await promesa1;
    const respuesta2 = await promesa2;
    console.log(respuesta);
    console.log(respuesta2);
  } catch (error) {
    console.error("fallo algo en el codigo");
  }
})();

