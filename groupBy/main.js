/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) { 
    const obj ={}
    let arr = this
    for (let i = 0; i< arr.length ; i++){
const key = fn(arr[i])
if (!obj[key]){
obj[key]=  []
 
}
 obj[key].push(arr[i]);
}  
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */