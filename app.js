const prompt = require("prompt-sync")()
// 1 Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.
let numA = 4
let numB = 2
if(numA>numB){
    console.log(numA + " es mayor que " + numB)
}
// 2 Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.
let edad
let numRef = 17
do{
    edad = prompt("Ingrese su edad")
    if(edad % 1 == 0){
        edad = parseInt(edad)
    }
}while(isNaN(edad) || edad === edad.toString())
if(edad>numRef){
    console.log("Eres mayor de edad")
}
// 3 Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
if(numA>numB){
    console.log(numA>numB)
}