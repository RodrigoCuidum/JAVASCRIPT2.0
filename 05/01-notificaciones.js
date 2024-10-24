"use strict";

if (!('Notification' in window)) {
    console.log("Las notificaciones no están disponibles en tu navegador");
} else {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log(`Notification`);
            new Notification("El primo de brawl stars");
        } else {
            console.log("Permiso denegado");
        }
    }).catch(error => {
        console.error("Error al solicitar el permiso de notificación:", error);
    });
}
