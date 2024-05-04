//1- The postfix and prefix forms
//What are the final values of all variables a, b, c and d after the code below?
//let a = 1, b = 1;
//let c = ++a; // ?
//let d = b++; // ?

//ANSWER:

//let a = 1, b = 1;
//let c = ++a; // Incrementa 'a' antes de la asignación, por lo que 'a' se convierte en 2 y luego 'c' se asigna el valor de 'a', que es 2.
//let d = b++; //  Incrementa 'b' después de la asignación, por lo que 'd' se asigna el valor actual de 'b', que es 1, y luego 'b' se incrementa a 2.

a = 2;
b = 2;
c = 2;
d = 1;



//2- Assignment result
//What are the values of a and x after the code below?
//let a = 2;
//let x = 1 + (a *= 2);

//ANSWER:

//let a = 2;
//let x = 1 + (a *= 2); // Multiplica 'a' por 2 y luego asigna el resultado a 'a', por lo que 'a' se convierte en 4. Luego, 'x' se asigna el resultado de 1 + 'a', que es 5.

a = 4;
x = 5;



//3-Type conversions
//What are results of these expressions?
//"" + 1 + 0
//"" - 1 + 0
//true + false
//6 / "3"
//"2" * "3"
//4 + 5 + "px"
//"$" + 4 + 5
//"4" - 2
//"4px" - 2
//"  -9  " + 5
//"  -9  " - 5
//null + 1
//undefined + 1
//" \t \n" - 2

//ANSWER:

"" + 1 + 0        // "10" - La suma con una cadena vacía "" convierte los números en cadenas.
"" - 1 + 0        // -1 - La resta "-" y otros operadores matemáticos convierten la cadena en números.
true + false      // 1 - true se convierte en 1, false se convierte en 0.
6 / "3"           // 2 - La división "/" convierte la cadena "3" en un número.
"2" * "3"         // 6 - El operador de multiplicación "*" convierte ambas cadenas en números.
4 + 5 + "px"      // "9px" - La suma con una cadena convierte los números en cadenas.
"$" + 4 + 5       // "$45" - La suma con una cadena convierte los números en cadenas.
"4" - 2           // 2 - La resta "-" convierte la cadena "4" en un número.
"4px" - 2         // NaN - La resta "-" no puede convertir la cadena "4px" en un número.
"  -9  " + 5      // "  -9  5" - La suma con una cadena convierte el número en una cadena.
"  -9  " - 5      // -14 - La resta "-" convierte la cadena "  -9  " en un número.
null + 1          // 1 - null se convierte en 0.
undefined + 1     // NaN - undefined se convierte en NaN.
" \t \n" - 2      // -2 - Los espacios, las tabulaciones y las nuevas líneas se convierten en 0.




//4-Fi the edition
//Here’s a code that asks the user for two numbers and shows their sum.
//It works incorrectly. The output in the example below is 12 (for default prompt values).
//Why? Fix it. The result should be 3.
//let a = prompt("First number?", 1);
//let b = prompt("Second number?", 2);
//alert(a + b); // 12

//ANSWER:

//prompt devuelve una cadena, no un numero.
//convertir las cadenas a números utilizando la función Number() antes de sumarlas.
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

// Convertir las cadenas a números antes de sumar. 
a = Number(a);
b = Number(b);

alert(a + b); // Ahora debería ser 3