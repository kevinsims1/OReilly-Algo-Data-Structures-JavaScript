//Decision Constructs

//Decision Constructs allow our program 
//to make decisions on what programming 
//statements to execute based on a Boolean 
//expression. The two we'll use in this 
//walk through,are if and switch statements.

//the if statement has three forms.
//The simple if statement
//Example:

// var mid = 25;
// var high = 50;
// var low = 1;
// var current = 13;
// var found = -1;
// if(current < mid) {
//     mid = (current - low) / 2;
// }


//The If/else statement
//Example:

// var mid = 25;
// var high = 50;
// var low = 1;
// var current = 13;
// var found = -1;
// if(current < mid) {
//     mid = (current - low) / 2;
// } else {
//     mid = (current + high) / 2;
// }


//The If/else/if statement
//Example:

// var mid = 25;
// var high = 50;
// var low = 1;
// var current = 13;
// var found = -1;
// if(current < mid) {
//     mid = (current - low) / 2;
// } else if(current > mid) {
//     mid = (current + high) / 2;
// } else {
//     found = current
// }

//The Switch Statement:
//Example:

// putstr("Enter a month number: ")
// var monthNum = readline();
// var monthName;
// switch(monthNum){
//     case "1":
//         monthName = "January";
//         break
//     case "2":
//         monthName = "February";
//         break
//     case "3":
//         monthName = "March";
//         break
//     case "4":
//         monthName = "April";
//         break
//     case "5":
//         monthName = "May";
//         break
//     case "6":
//         monthName = "June";
//         break
//     case "7":
//         monthName = "July";
//         break
//     case "8":
//         monthName = "August";
//         break
//     case "9":
//         monthName = "September";
//         break
//     case "10":
//         monthName = "October";
//         break
//     case "11":
//         monthName = "November";
//         break
//     case "12":
//         monthName = "December";
//         break
//     default:
//         print("Bad input")
// }
