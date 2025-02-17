const removeFromArray = function(ary, ...args) {

    //initiate the filter method for ary that checks each item whether its equal to del
    ary = ary.filter((item) => !(args.includes(item)));

    return ary;
};

// Do not edit below this line
module.exports = removeFromArray;
