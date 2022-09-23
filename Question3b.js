function printNumbers(from,  to) {
    let start = from;
    
    setTimeout(function run() {
        console.log(start)
        if(start < to) {
            setTimeout(run, 1000);
        }
        start++;
    },1000)
}

printNumbers(1, 5);