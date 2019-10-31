// Objects are created by defining a 
//constructor function that includes 
// declarations for an object’s properties 
// and functions, followed by definitions for 
// the functions. Here is the constructor 
// function for a checking account object:

function Checking(amount) { 
    this.balance = amount; // property 
    this.deposit = deposit; // function 
    this.withdraw = withdraw; // function 
    this.toString = toString; // function
}
// The this keyword is used to tie each 
// function and property to an object instance.
//  Now let’s look at the function definitions 
//  for the preceding declarations:

function deposit(amount) { 
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount; }
    if (amount > this.balance) { 
        print("Insufficient funds");
    } 
}

function toString() {
    return "Balance: " + this.balance;
}
// Again, we have to use the this keyword 
// with the balance property in order for the 
// interpreter to know which object’s balance 
// property we are referencing.

// Example 1-12 provides the complete 
// definition for the checking object along 
// with a test program.

// Example 1-12. Defining and using the Checking object
function Checking(amount) { 
    this.balance = amount; 
    this.deposit = deposit; 
    this.withdraw = withdraw; 
    this.toString = toString;
}
function deposit(amount) { 
    this.balance += amount;
}
function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount; }
    if (amount > this.balance) { 
        print("Insufficient funds");
    }
}

function toString() {
return "Balance: " + this.balance;
}

var account = new Checking(500); account.deposit(1000);
print(account.toString()); // Balance: 1500 account.withdraw(750);
print(account.toString()); // Balance: 750 account.withdraw(800); // displays "Insufficient funds" print(account.toString()); // Balance: 750