// Write a function that accepts an array of numbers and returns the average.
//
//     Test inputs:
//     [3, 5, 7, 10, 0]
//         [0, 3, 5, 6, 21]
// function array(inputs){
//     console.log(in)
// }
function average(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

console.log(average(array:[3, 5, 7, 10, 0]));
console.log(average(array:[0, 3, 5, 6, 21]));
