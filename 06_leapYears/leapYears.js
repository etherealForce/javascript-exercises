const leapYears = function(yar) {
    if (yar % 100 === 0 && yar % 400 === 0) {
        return true;
    } else if (yar % 4 === 0 && yar % 100 !== 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
