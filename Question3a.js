function printNumbers(from,  to) {
    let start = from;

    let timer = setInterval(function() {
        console.log(start);
        if(start == to) {
            clearInterval(timer);
        }
        start++;
    }, 1000)
}

printNumbers(1, 5);