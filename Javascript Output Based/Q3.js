// Rotate an array of n elements to the right k times in O(n) time complexity.

const input = [1,2,-2,11,7,1];
const input1 = [1,4,7,2,4,7]


function rotate(input) {
    for(let j = 0 ; j<2 ; j++){
        let temp = input[0];
        for(let i = 0 ; i < input.length-1 ; i++){
             input[i] = input[(i+1)%input.length];
         }
        input[input.length-1] = temp;
    }
    console.log(input);
}

rotate(input1);