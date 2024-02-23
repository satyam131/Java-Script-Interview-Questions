//finding second largest element without using map.


const input = [1,2,-3, 11, 7, 1];
const input1 = [1,4,7,2,4,7];


function large(input){
    input.sort((a,b)=>a-b);
   let max = input[input.length - 1];
   for(let i=input.length-2 ; i >=0 ; i--){
     if(input[i] < max){
        max = input[i];
        break;
     }
   }

   console.log(max);
}

large(input1);