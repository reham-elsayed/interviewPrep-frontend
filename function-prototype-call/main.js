Function.prototype.myCall = function (thisArg, ...argArray) {

    const context = thisArg ?? globalThis
    
    
    context.tempFn = this;
    
    const result = context.tempFn(...argArray);
    
    delete context.tempFn;
    
    return result;
    
    };