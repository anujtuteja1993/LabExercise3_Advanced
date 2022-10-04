function makeCounter() {
    let count = 0;
    let counter = function () {
        return count++;
    };

    counter.decrease = function() {
        return count--;
    }
    counter.set = function(num) {
        count = num;
        return count;
    }
    return counter;
}
let counter = makeCounter();
let counter2 = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter.decrease());
console.log(counter.set(10));
console.log(counter.decrease());
console.log(counter.decrease());