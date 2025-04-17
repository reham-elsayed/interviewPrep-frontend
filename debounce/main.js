/**
 * 
 * @param {*} func 
 * @param {*} wait 
 * @returns 
 */
/**
 * Debouncing is a technique used to control how many times we allow a function to be executed over time. 
 * When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.

You almost certainly have encountered debouncing in your daily lives before (e.g. when entering an elevator). Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.
 */

function debounce(func, wait) {
    let id;
    return function(){
      clearTimeout(id)    //cancells the previous timeout if exists
        id = setTimeout(()=>{func.apply(this)}, wait) // schedule a new timeout    obj.increment
    }
  }

  const obj = {
    count: 0,
    increment: function () {
      console.log(this.count++);
    }
  };
  
  const debouncedIncrement = debounce(obj.increment, 1000);
  
  obj.increment(); // this = obj ✅ works
 debouncedIncrement(); 
  
 




















