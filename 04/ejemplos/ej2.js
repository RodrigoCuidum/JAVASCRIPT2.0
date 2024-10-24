const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#444");
})

zona.addEventListener("dragleave",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
})

zona.addEventListener("drop",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
    cargarArchivo(e.dataTransfer.files[0]);
    zona.style.border = "4px solid #888"
})

const changeStyle = (obj, color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

const cargarArchivo = ar => {
    const reader = new FileReader();

    // ===> Texto <===
    // reader.readAsText(ar);
    // reader.addEventListener("load",e=>{
    //     document.querySelector(".resultado").textContent = e.currentTarget.result
    // })

    // ===> Imagen <===
    // reader.readAsDataURL(ar);
    // reader.addEventListener("load",e=>{
    //     let url = URL.createObjectURL(ar);
    //     let img = document.createElement("IMG");
    //     img.setAttribute("src",url);
    //     document.querySelector(".resultado").appendChild(img);
    // })

    // ===> Video <===
    reader.readAsArrayBuffer(ar);

    reader.addEventListener("progress", e => {
        if (e.lengthComputable) {
            let carga = Math.round((e.loaded / ar.size) * 100);
            zona.textContent = `${carga}%`;
            document.querySelector(".barra-de-carga").style.padding = "75px 20px";
            document.querySelector(".barra-de-carga").style.width = `${carga}%`;
        }
    });
    reader.addEventListener("loadend",e=>{
        changeStyle(zona, "#2e7");
        zona.style.borderStyle = "solid";
        document.querySelector(".barra-de-carga").style.background = "#2e7";
        setTimeout(()=>{
            zona.style.color = "#fff";
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent = "¡Carga completa!";
        },500)
    })

    reader.addEventListener("load",e=>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'});
        let url = URL.createObjectURL(video);
        let vid = document.createElement("VIDEO");
        vid.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(vid);
        vid.play()
    })
}