
const boton= document.getElementById("boton");
boton.addEventListener("click", function(e){
    e.preventDefault();
    const fechas= document.getElementById("fechaS").value;
    const fechar= document.getElementById("fechaR").value;
    let fechaActual = new Date();
    let fechaSalida = new Date(fechas);
    let fechaRegreso = new Date(fechar);
    if (fechaSalida < fechaActual || fechaRegreso < fechaActual){
        alert("Las fechas ingresadas son invalias pues ya pasaron")
    }else if (fechaSalida > fechaRegreso){
        alert("Las fechas ingresadas son invaliadas pues la fecha de regreso es antes que la de salida");
    }
    else{
        alert("Gracias por usar nuestra version de prueba, por favor espere por futuras actualizaciones :)");
    }
})