

// 1) Analyze an array’s values and return the average of its values.
function printAverage(x){
    let sum = 0;
    for(let i = 0; i < x.length; i++){
       sum += x[i];
    }
    return sum / x.length;
 }
 let y = printAverage([1,2,3]);
console.log(y); // logs 2

y = printAverage([2,5,8]);
console.log(y); // logs 5


// 2) Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddArray(){
    let arr = [];
    for(let i = 1; i <= 255; i++){
       if(i % 2 !== 0){
          arr.push(i);
       }
    }
    return arr;
 }
 let y = returnOddArray();
console.log(y); // logs [1, 3, 5, ..., 253, 255]

// 3) Square each value in a given array, returning that same array with changed values.
function squareValue(x){
    for(let i = 0; i < x.length; i++){
       x[i] = x[i] * x[i];
    }
    return x;
 }
 let y = squareValue([1,2,3]);
 console.log(y); // logs [1,4,9]
 
 y = squareValue([2,5,8]);
 console.log(y); // logs [4,25,64]
 