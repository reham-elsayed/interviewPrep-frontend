/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function selectionSort(arr) {

    for(let i =0; i<= arr.length-1; i++){
     let minIndex = i
     for (let j = i+1; j<=arr.length; j++){
       
       if (arr[minIndex]> arr[j]){
       minIndex= j 
       }
   
     }
     if (minIndex !== i){
       const temp = arr[i]
       arr[i]= arr[minIndex]
       arr[minIndex] = temp
     }
    }
    console.log(arr)
    return arr
   }