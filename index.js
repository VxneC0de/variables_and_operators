//Variables Tasks

//Working with variablesm -Declare two variables: admin and name. -Assign the value "John" to name. -Copy the value from name to admin. -Show the value of admin using alert (must output “John”).//

let admin;
let name;

name = "John";
admin = name;

//alert(admin);

//Giving the right name. -Create a variable with the name of our planet. How would you name such a variable? - Create a variable to store the name of a current visitor to a website. How would you name that variable?//

let earthPlanet;
let currentVisitor;


//Uppercase const? -Examine the following code: 

//const birthday = '18.04.1982';
//const age = someCode(birthday);

//Here we have a constant birthday for the date, and also the age constant. The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday. Would it be right to use upper case for birthday? For age? Or even for both?

//const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
//const AGE = someCode(BIRTHDAY); // make age uppercase?

const BIRTHDAY = '18.04.1982';


//ODIN PROJECT

//1- Add 2 numbers together! (just type console.log(23 + 97) into your HTML file)

console.log(40 + 40);

//2- Add a sequence of 6 different numbers together.

console.log(10 + 10 + 50 + 20 + 10);

//3- Print the value of the following expression: (4 + 6 + 9) / 77
//Answer should be approximately 0.24675

console.log((4 + 6 + 9) / 77);

//4- Let’s use variables!
//Type this statement at the top of the script tag: let a = 10
//In the console console.log(a) should print 10
//Try the following in the console: 9 * a
//and this: let b = 7 * a (returns undefined *) and then console.log(b)

let a = 10;
let b = 7 * a;

console.log(a);
console.log(9*a);
console.log(b);

//5-You should be getting the hang of this by now… try this sequence:
//Declare a constant variable MAX with the value 57
//Set another variable actual to MAX - 13
//Set another variable percentage to actual / MAX
//If you type percentage in the console and press Enter you should see a value like 0.7719

let MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;

console.log(percentage);