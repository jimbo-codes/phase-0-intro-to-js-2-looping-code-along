// Code your solutions in this file

function writeCards(names,event){
    const newarr = [];
    for(let i = 0; i<names.length; i++){
        newarr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newarr;
}
function countDown(number){
    while(number>=0){
        console.log(number);
        number--;
    }
}