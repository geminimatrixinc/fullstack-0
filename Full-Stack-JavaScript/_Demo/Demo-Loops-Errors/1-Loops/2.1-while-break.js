// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0, number;

var promptUserForNumber = () => {
    while(true) {

        // take input again if the number is positive
        number = parseInt(prompt('Enter a number: '));
    
        // break condition
        if(number < 0) {
            break;
        }
    
        // add all positive numbers
        sum += number;
    
    }
}

promptUserForNumber();
// display the sum
console.log(`The sum is ${sum}.`);