// COMPLETE ALL FIVE TASKS BEFORE SUBMITTING!

// 1.Fix the Triple Function
// Directions: Fix the triple function so it triples the parameter
// Example: If the argument is 10, the function should return 30, because 10 * 3 = 30.

function triple(x){
     var answer = 3*x;
    return answer ;
}

// Test your triple function. 
// If it works, the page should say "If you triple 10 you get ...30"
var answerOne = triple(10);
$("#triple").append(answerOne);


// 2. Fix the Greeting Function

// Directions: Fix the greeting function
// Example: If the argument is "Erica", the function should return "Hello Erica"

function greeting(person){
 
    var answer = "Hello" + person;
    return answer ;
 
}

// 3. Fix the greeting test code: 
// Test your greeting function by calling greeting with your name, and storing the returned in variable "message"
// If it works, the page should say "You greet someone by saying...Your Name"

var message = greeting (" Zwade");
$("#hello").append(message);

// 4. Write a square function
// Directions: Write a function called square with one parameter. Square should return the square of the parameter.
// Example: If the argument is 4, the function should return 16 because 4*4 = 16

function square(x){
var answer = 6*x;
return answer ;
}
// 5. Write test code for the square function. Your test code should....
// * Call the square function with 6 as the argument
// * Save the return value in a variable
// * append the value to the paragraph with id "square"
var answerOne = square(6);
$("#square").append(answerOne);
// If it works, the page should say "If you square 6 you get... 36"
