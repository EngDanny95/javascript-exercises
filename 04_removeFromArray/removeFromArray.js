const removeFromArray = function(arrayNumbers, ...nums) { 
//using Rest argument, the function can go through any number of parameters added
    for (i=0;i<arrayNumbers.length;i++){ 
        for (let n of nums){
        if (arrayNumbers[i]===n){
            arrayNumbers.splice(i,1);
            i--;
        }}
    }
    return arrayNumbers;
};

//removeFromArray([1,2,3,4],2,3,1,4)

// Do not edit below this line
module.exports = removeFromArray;
