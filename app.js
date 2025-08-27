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
// 4 Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.
let nombre1;
let nombre2;
do{
    nombre1 = prompt("Ingrese su nombre: ")
    nombre2 = prompt("Ingrese su nombre de vuelta: ")
}while(!isNaN(parseInt(nombre1)) || !isNaN(parseInt(nombre2)))
if(nombre1 == nombre2){
    console.log(nombre1)
}
// 5 Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.
do{
    nombre1 = prompt("Ingrese su nombre: ")
    nombre2 = prompt("Ingrese su nombre de vuelta: ")

}while(!isNaN(parseInt(nombre1)) || !isNaN(parseInt(nombre2)))
if(nombre1 != nombre2){
    console.log(nombre1 + " es distinto de "+ nombre2)
} 
// 6 Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.
do{
    numA = prompt("Ingrese un numero: ")
}while(isNaN(parseInt(numA)))
if(numA<0){
    console.log(numA + " es negativo")
}