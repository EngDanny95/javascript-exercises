const repeatString = function(s,n) {
   let l = s;
   const number = Math.floor(Math.random()*1000);
   if(n==0){
    s='';} 
    else if(n<0){
        return 'ERROR'
    }
   for (let i=1; i<n;i++){
        s += l;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
