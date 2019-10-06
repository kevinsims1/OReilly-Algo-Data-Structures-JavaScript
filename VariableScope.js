//Variable Scope
// DEFINITION OF SCOPE:
//The scope of a Variable refers to 
//where in a program a variables value 
//can be accessed.

//The scope of a variable in JavaScript is
//defined as function Scope. This means 
//that a variables value is accessible 
//within the function that the Var
//is declared and defined, and within
//any functions that are nested 
//within that function

//When a Variable is defined outside of a
//function it is said to have 
//Global Scope, which means its value
//can be accessed by any part of the 
//program including functions.

//GLOBAL SCOPE EXAMPLE:

// function showScope(){
//     return scope;
// }
// var scope = "GLOBAL"
// print(scope); "GLOBAL"
// print(showScope()); "GLOBAL"

//The function showScope() can access 
//the `var scope = "GLOBAL"` because scope 
//is a global variable. Global variables 
//can be declared anyplace in the program 
//before or after functions.

//Now watch what happens when we define a 
//second scope variable within the function:

// function showScope() {
//     var scope = "local"
//     return scope;
// }
// var scope = "global";
// print(scope); "global"
// print(showScope()); "local"

//The Var defined in the showScope() has 
//local scope while the Var defined in the 
//main program is a global Variable. Even 
//though the two variables have the same 
//name their scopes are different and their 
//values are different when accessed within 
//the area od the program where they were 
//defined.

//These behaviors are expected but all of
//this can change if you leave off the 
//keyword Var in the variable definitions.
//JavaScript allows you to define variables 
//without using var but when you do that 
//variable automatically has global scope 
//even if defined within a function. 

//Example of not using Var:

// function showScope() {
//     scope = "local"
//     return scope;
// }
// scope = "global";
// print(scope); "global"
// print(showScope()); "local"
//print(scope); "local"

//since the variable outside of the function
//is not declared with the var keyword when
//we change it to local in the function
//we are changing the variable outside of 
//the program