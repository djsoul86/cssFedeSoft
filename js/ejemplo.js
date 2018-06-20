
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

for(var i = 0; i < dias.length; i++){
    console.log(dias[i]);
}

if(edad > 30){
console.log("adulto");
}else{
console.log("niño");
}