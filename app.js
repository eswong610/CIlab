let sortArrayByParity = function(arr) {
    evenArr=[];
    //oddArr=[];
    if (arr.length < 0 && !Array.isArray(arr)) {
        throw Error('array needs more numbers for sorting')
    }else{
    for (i=0; i<arr.length; i++) {
        if (typeof(arr[i]) != 'number'){
            throw Error('not a number')
        }else{
            if (arr[i] % 2 === 0) {
                evenArr.push(arr[i]);
            }else if (arr[i]% 2 === 1) {
                oddArr.push(arr[i])
            }
        }  
    }
    return (evenArr.concat(oddArr))
    }
    
};




module.exports = { sortArrayByParity }
