const findTheOldest = function(people) {
    const CURRENT_YEAR = new Date().getFullYear();
    people.sort((a , b) => {
        let aAge;
        let bAge;
        if (typeof a.yearOfDeath === "undefined") {
            aAge = CURRENT_YEAR - a.yearOfBirth;
            bAge = b.yearOfDeath - b.yearOfBirth;
        } else if (typeof b.yearOfDeath === "undefined") {
            bAge = CURRENT_YEAR - b.yearOfBirth;
            aAge = a.yearOfDeath - a.yearOfBirth;
        } else {
            aAge = a.yearOfDeath - a.yearOfBirth;
            bAge = b.yearOfDeath - b.yearOfBirth;
        }



        return bAge - aAge;
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
