// Code your solutions in this file
function writeCards(name,event) {
const messages = [];
let n = [name].length;
for (let i=0; i < name.length; i++) {
messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
}
return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--
    }

}
