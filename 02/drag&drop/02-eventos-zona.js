"use strict";

const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");

rectangulo.addEventListener("dragenter", ()=>console.log(1));
rectangulo.addEventListener("dragover", (e)=>{
    e.preventDefault();
    console.log(2)
})
rectangulo.addEventListener("drop", ()=>console.log(3));
rectangulo.addEventListener("dragleave", ()=>console.log(4));