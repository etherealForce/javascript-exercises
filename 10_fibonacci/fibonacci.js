const fibonacci = function(fibo) {
    if (fibo < 0) {
        return "OOPS";
    }
    let i = 0;
    let sequence = [];
    do {
        
        if (sequence.length < 2) {
            sequence.push(i);
        } else {
            let current = sequence[i - 1] + sequence[i - 2];
            sequence.push(current);
        }
        i++;
    }   while (i <= fibo)

    return sequence[fibo];
};

// Do not edit below this line
module.exports = fibonacci;
