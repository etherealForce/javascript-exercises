const palindromes = function (strung) {
    
    let regex = /^[a-z0-9]+$/i;
    let punctRemoved = strung
    .toLowerCase()
    .split("")
    .filter( (item) => regex.test(item))
    .join("");
    

    let reversed = punctRemoved.split("").reverse().join("");

    return punctRemoved === reversed;
};

// Do not edit below this line
module.exports = palindromes;
