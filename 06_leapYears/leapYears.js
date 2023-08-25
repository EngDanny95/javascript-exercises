const leapYears = function (leap) {
//start if statement with the most specific exception before going with the more common results 
    if (!(leap % 400)) {
        return true;
    }
    else if (!(leap % 100)) {
        return false;
    }
    else if (!(leap % 4)) {
        return true;
    }

    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
