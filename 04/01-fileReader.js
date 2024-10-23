"use strict";

const archivo = document.getElementById('archivo');
archivo.addEventListener("change", (e)=>{
    leerArchivo(archivo.files)
})


const leerArchivo = ar => {

    for (var i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener("load", (e)=>{
        console.log(JSON.parse(e.currentTarget.result))
        })
        
    }
}
