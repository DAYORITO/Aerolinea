
const boton= document.getElementById("boton");
boton.addEventListener("click", function(e){
    e.preventDefault();
    try{
        if (document.getElementById("roundtrip").checked == false && document.getElementById("one-way").checked == false && document.getElementById("multi-city").checked == false){
            throw new Error("Debe especificar el tipo de viaje a realizar");
        }else if (document.getElementById("ciudadO").value == "" || document.getElementById("ciudadD").value == ""){
            throw new Error("Debe especificar la ciudad de origen y destino");
        }else if (document.getElementById("fechaS").value == false || document.getElementById("fechaR").value == false){
            throw new Error("Debe especificar fecha de salida y regreso");
        }
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
}catch(error){
    alert("Error: " + error)
}
})