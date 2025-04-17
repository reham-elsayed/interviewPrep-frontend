function makeCounter(initialValue = 0) {
    let counter = initialValue
  return {
    increment:  function(incrementValue=1){
  
      return counter+= incrementValue
      },
      reset: function(){
       counter = 0
return counter
      }
  }
  }
  let counter = makeCounter(5)
  
  console.log("1: ", counter.increment(5))
  console.log("2: ", counter.increment(5))
  console.log("3: ", counter.increment(5))
  console.log("4: ", counter.increment(5))
  console.log("5: ", counter.reset())
  console.log("6: ", counter.increment())
  console.log("7: ", counter.increment())