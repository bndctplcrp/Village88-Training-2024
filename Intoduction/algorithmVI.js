// 1. Return the given array, after setting any negative values to zero.
function resetNegatives(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}


// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.

function moveForward(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}


// 3. Given an array, return an array with values in a reversed order.

function returnReversed(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}


// 4. Create a function that changes a given array to list each original element twice, retaining the original order.

function repeatTwice(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        result.push(arr[i]);
    }
    return result;
}
