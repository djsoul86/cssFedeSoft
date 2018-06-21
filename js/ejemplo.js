
var nombre = "Ernesto";
var edad = 31;
var peso = 78.5;
var estado = false;

var array = new Array();

array.push(nombre);
array.push(edad);
array.push(peso);
array.push(estado);

console.log(array);

var dias = new Array();

dias.push("Lunes");
dias.push("Martes");
dias.push("Miercoles");
dias.push("Jueves");
dias.push("Viernes");
dias.push("Sabado");
dias.push("Domingo");

for (var i = 0; i < dias.length; i++) {
    console.log(dias[i]);
}

if (edad > 30) {
    console.log("adulto");
} else {
    console.log("niño");
}


var js = document.getElementsByTagName("p");
$( document ).ready(function() {
    for (var i = 0; i < js.length; i++) {
        console.log(js[i].innerHTML);
        js[i].innerHTML = nombre;
    }
});

console.log(js);

var product1 = prompt('Valor Producto 1','');
var product2 = prompt('Valor Producto 2','');
var iva = 1.19;
var suma = 0;

sumar(product1,product2);
ivaProducto();

function sumar(x,y){
    suma = parseInt(x) + parseInt(y);
    alert("Total productos:" + suma);
}

function ivaProducto(){
    alert(suma*iva);
}


