const reverseString = function(aStrung) {
    let letterz = [];

    for (let aLetter of aStrung) {
        letterz.push(aLetter);
    }
    letterz.reverse();

    return letterz.join("");
    //go through the array from the last until the first and 
};

// Do not edit below this line
module.exports = reverseString;
