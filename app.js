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
    edad = prompt("Ingrese su edad: ")
    if(edad % 1 == 0 && edad >= 0){
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
// 7 Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.
do{
    numA = prompt("Ingrese un numero: ")
}while(isNaN(parseInt(numA)))
if(numA>=0){
    console.log(numA + " no es negativo")
}
// 8 Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.
numA = 2
numB = 5
if(numA % 2 == 0){
    console.log(numA + " es par")
}else{
    console.log(numA + " es impar")
}
if(numB % 2 == 0){
    console.log(numB + " es par")
}else{
    console.log(numB + " es impar")
}
// 9 Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.
do{
    numA = prompt("Ingrese un numero: ")
}while(isNaN(parseInt(numA)))
if(numA>=0){
    console.log(numA + " es positivo")
}else{
    console.log(numA + " es negativo")
}
// 10 Crea una función que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.
let stringVar;
let inWhile = true;
const vocales = ["a", "e", "i", "o", "u"]
const letras = /^[A-Za-z]+$/;
do{
    stringVar = prompt("Ingrese un unico caracter: ")
    if(stringVar.length == 1 && letras.test(stringVar)){
        inWhile = false
    }
}while(inWhile)
for(let i = 0; i<vocales.length; i++){
    if(stringVar.toLocaleLowerCase() == vocales[i]){
        console.log(stringVar + " es una vocal")
        i = vocales.length
    }
    if(i == (vocales.length-1) && stringVar != vocales[i]){
        console.log(stringVar + " es una consonante")
    }
}
// 11 Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.
inWhile = true
let nombreVar;
do{
    nombreVar = prompt("Ingrese un nombre: ")
    if(letras.test(stringVar)){
        inWhile = false
    }
}while(inWhile)
if(nombreVar.toLocaleLowerCase() == 'pedro'){
    console.log("Hola Pedro, como estás?")
}
else{
    console.log("Hola! Cómo te llamas?")
}
// 12 Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.
do{
    numA = prompt("Ingrese su nota: ")
}while(isNaN(parseInt(numA)) || numA < 0 || numA > 10)
if(numA >= 7){
    console.log("Estas aprobado")
}else{
    console.log("Estas desaprobado")
}
// 13 Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.
do{
    numA = prompt("Ingrese un numero: ")
}while(isNaN(parseInt(numA)))
if(numA <= 10){
    console.log(numA + " es menor a 10")
}
else if(numA<= 50){
    console.log(numA + " esta entre 10 y 50")
}
else{
    console.log(numA + " es mayora 50")
}
// 14 Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.
do{
    numA = prompt("Ingrese un numero: ")
    numB = prompt("Ingrese otro numero: ")
}while(isNaN(parseInt(numA)), isNaN(parseInt(numB)))
if(numA < 10 && numB < 10){
    console.log(numA * numB)
}
else if(numA > 50 && numB > 50){
    console.log(numA + numB)
}
else{
    console.log(numA - numB)
}
// 15 Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. Por ejemplo: 1 = ‘lunes’
do{
    numA = prompt("Ingrese un numero del 1 al 7: ")
}while(isNaN(parseInt(numA)) || numA < 1 || numA >7 )
const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
for(i = 0; i < diasSemana.length; i++){
    if(numA == i+1){
        console.log(diasSemana[i])
    }
}
// 16 Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.
do{
    numA = prompt("Ingrese un numero: ")
}while(isNaN(parseInt(numA)))
if(numA % 2 == 0 && numA % 3 == 0){
    console.log(numA + " es divisible por 2 y 3")
}
else if(numA % 2 == 0){
    console.log(numA + " es divisible por 2")
}
else if(numA % 3 == 0){
    console.log(numA + " es divisible por 3")
}
else{
    console.log(numA + "no es divisible por 2 ni 3")
}
// 17 Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.
const meses = ['enero', 'febrero', 'marzo', 'arbil', 'mayo', 'junio', 'julio', 
    'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
do{
    numA = prompt("Ingrese un numero del 1 al 12: ")
}while(isNaN(parseInt(numA)) || numA < 1 || numA > 12 )
for(i = 0; i < meses.length; i++){
    if(numA == i+1){
        console.log(meses[i])
    }
}
// 18 Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.

do{
    numA = prompt("Ingrese un numero del 1 al 7: ")
}while(isNaN(parseInt(numA)) || numA < 1 || numA >7 )
switch(numA){
    case('1'):
        console.log(diasSemana[0])
        break;
    case('2'):
        console.log(diasSemana[1])
        break;
    case('3'):
        console.log(diasSemana[2])
        break;
    case('4'):
        console.log(diasSemana[3])
        break;
    case('5'):
        console.log(diasSemana[4])
        break;
    case('6'):
        console.log(diasSemana[5])
        break;
    case('7'):
        console.log(diasSemana[6])
        break;
}
// 19 Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.
let genero;
do{
    genero = prompt("Ingrese su genero (H, M, X): ")
    genero = genero.toLocaleLowerCase().trim()
}while(!(genero == 'h') && !(genero == 'm') && !(genero == 'x'))
switch(genero){
    case('h'):
        console.log("Tu genero es masculino")
        break;
    case('m'):
        console.log("Tu genero es femenino")
        break;
    case('x'):
        console.log("Tu genero es no binario")
        break;
}
// 20 Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda. 
do{
    numA = prompt("Ingrese un numero del 1 al 10: ")
}while(isNaN(parseInt(numA)) || numA < 1 || numA > 10)
switch(numA){
    case('1'):
        console.log("Uno")
    break;
    case('2'):
        console.log("Dos")
    break;
    case('3'):
        console.log("Tres")
    break;
    default:
        console.log("Mayor a 3")
}
// 21 Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.
do{
    stringVar = prompt("Ingrese un unico caracter: ")
    if(stringVar.length == 1){
        inWhile = false
    }
}while(inWhile)
switch (stringVar.toLowerCase().trim()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log(stringVar + "Es una vocal");
    break;

  case 'b':
  case 'c':
  case 'd':
  case 'f':
  case 'g':
  case 'h':
  case 'j':
  case 'k':
  case 'l':
  case 'm':
  case 'n':
  case 'ñ':
  case 'p':
  case 'q':
  case 'r':
  case 's':
  case 't':
  case 'v':
  case 'w':
  case 'x':
  case 'y':
  case 'z':
    console.log(stringVar + "Es una consonante");
    break;
  default:
    console.log(stringVar + "Es un carácter especial");
}
// 22 Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.
do{
    numA = prompt("Ingrese un numero del 1 al 4: ")
}while(isNaN(parseInt(numA)) || numA < 1 || numA > 4)
switch(numA){
    case('1'):
        console.log("otonio")
    break;
    case('2'):
        console.log("invierno")
    break;
    case('3'):
        console.log("primavera")
    break;
    case('4'):
        console.log("verano")
    break;
}
