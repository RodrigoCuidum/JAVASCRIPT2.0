"use strict";

const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");

circulo.addEventListener("dragstart", ()=>console.log("lo agarras"));
circulo.addEventListener("drag", ()=>console.log("lo tienes"));
circulo.addEventListener("dragend", ()=>console.log("lo sueltas"));

rectangulo.addEventListener("dragenter", ()=>console.log("entra en zona"));
rectangulo.addEventListener("dragover", (e)=>{
    e.preventDefault();
    console.log("esta en la zona")
})
rectangulo.addEventListener("drop", ()=>console.log("lo dejas en la zona"));
rectangulo.addEventListener("dragleave", ()=>console.log("lo sacas de zona"));