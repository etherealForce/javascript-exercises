const repeatString = function(strung, num) {
    let productStrung = "";

    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        productStrung += strung;
    }

    return productStrung;
};

// Do not edit below this line
module.exports = repeatString;
