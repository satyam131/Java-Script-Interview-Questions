// finding second largest element from an array

const input = [1,2,-3, 11, 7, 1];
const input1 = [1,4,7,2,4,7];


function large(input){
   let temp = [...new Set(input)].sort((a,b)=>a-b);
   return temp[temp.length - 2];
}

console.log(large(input1));



// let temp = [...new Set(input)].sort((a, b) => a - b);:

// new Set(input): Creates a new Set from the array input, removing any duplicate elements.
// [...new Set(input)]: Spreads the unique elements back into an array. (converted set to array again then sort).
// .sort((a, b) => a - b): Sorts the array in ascending order. The provided comparison function ensures numerical sorting.