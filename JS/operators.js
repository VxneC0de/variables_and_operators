//Active learning: sizing a canvas box
//In this exercise, you will manipulate some numbers and operators to change the size of a box. The box is drawn using a browser API called the Canvas API. There is no need to worry about how this works — just concentrate on the math for now. The width and height of the box (in pixels) are defined by the variables x and y, which are initially both given a value of 50.

//The rectangle is 50px wide and 50px high.
//let x = 50; let y = 50;

// Edit the two lines below here ONLY
x = 50;
y = 50;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

let x = 50; let y = 50;

//ANSWER:

// Cambia la línea que calcula x para que la caja tenga 50px de ancho, pero el 50 se calcula usando los números 43 y 7 y un operador aritmético.
x = 43 + 7;

// Cambia la línea que calcula y para que la caja tenga 75px de alto, pero el 75 se calcula usando los números 25 y 3 y un operador aritmético.
y = 25 * 3;

// Cambia la línea que calcula x para que la caja tenga 250px de ancho, pero el 250 se calcula usando dos números y el operador de módulo (resto).
x = 500 % 2;

// Cambia la línea que calcula y para que la caja tenga 150px de alto, pero el 150 se calcula usando tres números y los operadores de resta y división.
y = (300 - 150) / 1;

// Cambia la línea que calcula x para que la caja tenga 200px de ancho, pero el 200 se calcula usando el número 4 y un operador de asignación.
x *= 4;

// Cambia la línea que calcula y para que la caja tenga 200px de alto, pero el 200 se calcula usando los números 50 y 3, el operador de multiplicación y el operador de asignación de suma.
y = 50;
y *= 3;
y += 50;








//Math 1

// Paso 1: Crear cuatro variables que contengan números
num1 = 8;
num2 = 4;
num3 = 6;
num4 = 2;

// Paso 2: Sumar las dos primeras variables y almacenar el resultado en otra variable
sumResult = num1 + num2; // 12

// Paso 3: Restar la cuarta variable de la tercera y almacenar el resultado en otra variable
subtractResult = num3 - num4; // 4

// Paso 4: Multiplicar los resultados de los pasos 2 y 3 y almacenar el resultado en una variable llamada finalResult
finalResult = sumResult * subtractResult; // 48

// Paso 5: Comprobar si finalResult es un número par usando uno de los operadores aritméticos. Almacenar el resultado (0 par, 1 impar) en una variable llamada evenOddResult
evenOddResult = finalResult % 2; // 0



//Math 2

let result = 7 + 13 / 9 + 7; //15.4444
let result2 = 100 / 2 * 6; // 300

//Multiplica result y result2, asigna el resultado a result(usa taquigrafía de asignación).

result *= result2; // 4633.333333333334

//Formatee resultpara que tenga dos decimales y guárdelo en una variable llamada finalResult.

let finalResult = result.toFixed(2); // "4633.33"

//Verifique el tipo de datos de finalResultuso typeof. Si es un string, conviértalo a un numbertipo y almacene el resultado en una variable llamada finalNumber.
//Para pasar esta prueba, finalNumberdebe tener un resultado de 4633.33.

let finalNumber;
if (typeof finalResult === "string") {
    finalNumber = Number(finalResult); // 4633.33
}



//Math 3

//En la tarea final de este artículo, queremos que escribas algunas pruebas. Hay tres grupos, cada uno de los cuales consta de una declaración y dos variables. Para cada uno, escribe una prueba que pruebe o refute la afirmación realizada. Almacene los resultados de esas pruebas en variables llamadas weightComparison, heightComparisony pwdMatch, respectivamente.

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

// Add your code here

let weightComparison = eleWeight > mouseWeight; 

let heightComparison = ostrichHeight > duckHeight; 

let pwdMatch = pwd1.toLowerCase() === pwd2.toLowerCase(); // convertir ambas contraseñas en minusculas para despues compararlas.