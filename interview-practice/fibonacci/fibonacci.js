// iterative solution:
//a function that takes in a number and returns an array that prints that many numbers from the fib sequence
function fibsI(n) {
    let array = [0, 1];
    //iterate n times
    for (let i = 2; i < n; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array;
}

// console.log(fibsI(2));

//just recursive fibonacci (without adding to array)
function fibsRec(n) {
    if (n < 2) {
        return n;
    } else {
        return fibsRec(n - 1) + fibsRec(n - 2);
    }
}

// console.log(fibsRec(8));

function fibsRecArr(n) {
    if (n <= 1) {
        return [0, 1];
    } else {
        let arr = fibsRecArr(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

console.log(fibsRecArr(7));
