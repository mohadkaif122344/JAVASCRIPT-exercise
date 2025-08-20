

// JavaScript program to illustrate nested-if statement
let i = 20;

if (i == 10)
    console.log("i is 10");
else if (i == 15)
    console.log("i is 15");
else if (i == 20)
    console.log("i is 20");
else
    console.log("i is not present");






// JavaScript program to illustrate nested-if statement
let i = 10;
if (i == 10) { 
    if (i < 15) {
        console.log("i is smaller than 15");
        
        if (i > 12)
            console.log("i is smaller than 12 too");
        else
            console.log("i is not greater than 12");
    }
}






for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; 
    }
    console.log(i);
}
