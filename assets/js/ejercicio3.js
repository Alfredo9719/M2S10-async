console.log("Entro ejercicio 3");

let loading = document.getElementById("loading");

//Crear una promesa
const miPrimeraPromesa = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        const exito = true;
        if (exito){
            resolve("La promesa finalizo correctamente");
        } else {
            reject("La promesa se rechazo o no se cumplio");
        }
    },2000);

});


//manejar promesa .then .catch .finaly

miPrimeraPromesa //las promesas no llevan parentesis
.then((result)=>{
    console.log("Entro al then");
    console.log(result);
})
.catch((error)=>{
    console.error("Entro a catch");
    console.error(error);
})
.finally(()=>{
    loading.style.display = "none";
});

console.log("Este console log es sincrono")



