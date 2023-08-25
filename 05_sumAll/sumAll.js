const sumAll = function (a, b) {
    let c = b
    if (a > b) {
        b = a;
        a = c;
    }
    let i = a;
    let sum = 0;
    if (typeof (a) === 'string' || typeof (b) === 'string') {
        return 'ERROR'
    }

    else if (a >= 0 && b >= 0) {
        console.log(a, b)
        while (i <= b) {
            sum += i;
            i++
        }
        return sum;
    }

    else{
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
