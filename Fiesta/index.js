const readlineSync = require("readline-sync");
let time = Number(readlineSync.question("what time is it?"));
let free = false
let maxCapacity = 0
const open = () => {
    while(maxCapacity<20) {
        let age = Number(readlineSync.question("How old are you?"));
        if(age >= 18) {
            if(!free) {
                console.log("Congratulations! You have a free pass for being the first customer")
                free = true
                maxCapacity++;

            } else {
                console.log("You can enter but you must paid")
                maxCapacity++;
                }
        }else {
            console.log("You Shall not pass!, You are underage")
        }
        console.log('number of people inside: ', maxCapacity)
        console.log("\n --------NEXT------ \n")
    }
    return console.log('Maximum capacity reached, no one else can enter') 
}


if(time>=00 && time<=05) {
    open();
   
} else {
    console.log("CLOSED")
};

