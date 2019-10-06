//Repetition Constructs

//Repetition structures, or loops, 
//are used when a program needs to 
//repeatedly process one or more 
//instructions until some condition is 
//met, at which time the loop ends. 
//Many programming tasks are repetitive, 
//having little variation from one 
//item to the next. We use two repetition
//constructs in this follow along:
//the while loop and the for loop.

//The While Loop
//When we want to execute a set of 
//statements while a condition is true 
//we use a while loop.

//Example:

// var num = 1;
// var sum = 0;
// while(num < 11) {
//     sum += num
//     ++num
// }
// print(sum); 55



//The For loop
//When we want to execute a set of 
//statements a specific number of times 
//we use a for loop

//Example:

// var num = 1;
// var sum = 0;
// for(var num = 1; num < 11; num++){
//     sum+= num
// }
// print(sum); 55

//For loops are also used to access the 
//elements inside of an array

//EXAMPLE:

// var num = [1,2,3,4];
// var sum = 0;
// for (var i = 0; i < num.length; i++) {
//     sum += num[i]
// }
// print(sum); 144