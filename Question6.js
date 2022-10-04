let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};
let pockets = {
    money: 2000,
    __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

//basic benchmarking. runs the same operation lots of times, tests how long it took by saving the Date (in milliseconds) before and after
let pocketsTestStart = new Date();
for (let i = 0; i < 1000000; i++)
{
    let glasses = pockets.glasses;
}
let pocketsTestTime = (new Date()) - pocketsTestStart;

let headTestStart = new Date();
for (let i = 0; i < 1000000; i++)
{
    let glasses = head.glasses;
}
let headTestTime = (new Date()) - headTestStart;

console.log(pocketsTestTime)
console.log(headTestTime)
console.log(pocketsTestTime > headTestTime ? 'head.glasses is quicker' : 'pockets.glasses is quicker')