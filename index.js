// Code your solutions in this file
function writeCards(array, event){
    let final = []
    for(let i = 0; i < array.length; i++) {
    final.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return final;
}

function countdown(num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num)
}