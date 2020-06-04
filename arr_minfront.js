// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr) {
    var min = arr[0];
    var idx = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    for (var x = idx; x > 0; x--){
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}

let arr = [4, 2, 1, 3, 5];
function minToFront(array){
    let min = arr[0]; // grabbing first index to compare
    let idx = undefined; // grabbing the place in the array
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = arr[i];
            idx = i
        }
    }
    for(let i = idx; i > 0; i--){
        array[i] = arr[i - 1];
    }
    arr[0] = min;
    return arr;
}
console.log(minToFront(arr));