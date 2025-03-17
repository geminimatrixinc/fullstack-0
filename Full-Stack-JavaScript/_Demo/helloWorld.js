
var TAX_RATE = 500; // GLOBAL

/// NAMED FUNCTION
function helloWorld() {
    taxRate = 0; // LOCAL 
    console.log("hello...x is equal " + x)
}

/// FUNCTION EXPRESSION
var gretter = function() {
    console.log("greeting..");
}


helloWorld();
x = true;
console.log(x)