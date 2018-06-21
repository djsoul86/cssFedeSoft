function cambiar(){
    $("#titulo").text("HOLA BB");
    var imagen = document.getElementById("imagen");
    console.log(imagen);
    document.getElementById("imagen").src = "./imagenes/descarga.jpg"
    console.log(imagen);
}