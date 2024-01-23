
// 1. Given an array and a value Y, count and print the number of array values greater than Y.

function countGreaterThanY(arr, Y) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > Y) {
            count++;
        }
    }
    console.log(count);
}


// 2. Given an array, print the max, min, and average values for that array.

function printMaxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log("Max: " + max);
    console.log("Min: " + min);
    console.log("Avg: " + sum / arr.length);
}


// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.

function replaceNegatives(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}


// 4. Given an array, and indices start and end, remove values in that index range, working in place (hence shortening the array).

function removeVals(arr, start, end) {
    arr.splice(start, end - start + 1);
    return arr;
}
