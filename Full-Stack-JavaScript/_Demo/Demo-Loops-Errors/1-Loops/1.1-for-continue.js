// program to print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }

    if (i == 4) {
        break;
    }
    // skip...the rest of the statement
    console.log(i);
}