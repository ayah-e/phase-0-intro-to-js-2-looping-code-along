// Code your solutions in this file

// signature: input -> output 
// sig: (str.arr, str) -> str.arr
function writeCards(names, adj) {
    // declare a new array to store cards
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push((`Thank you, ${names[i]}, for the wonderful ${adj} gift!`));
    }
    return messages;
    
}

// purpose: countdown for any integer until it reaches 0
// sig: int -> NONE
function countDown(number) {
    for (let i = number; i >= 0; i--){
        console.log(i);
    }
}


