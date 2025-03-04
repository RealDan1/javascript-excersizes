function sumRange(n) {
    if (n == 1) {
        return 1;
    }

    return n + sumRange(n - 1);
}

// console.log(sumRange(3));

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }

    return base * power(base, exponent - 1);
}
// console.log(power(2, 1));

function factorial(n) {
    if (n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

// console.log(factorial(5));

//
var allAreLessThanSeven = all([1, 2, 9], function (num) {
    return num < 7;
});

// console.log(allAreLessThanSeven); // false

//Check all values in an array
function all(array, callback) {
    var copy = array.slice(); // shallow copies array

    if (copy.length === 0) return true;

    if (callback(copy[0])) {
        copy.shift(); // remove first element from array
        return all(copy, callback);
    } else {
        return false;
    }
}

//multiply array
function productOfArray(arr) {
    var copy = arr.slice();
    if (copy.length === 0) {
        return 1;
    } else {
        return (product = copy[0] * productOfArray(copy.slice(1))); //times the first item of the array by the result of the recursion on the array minus the first element
    }
}

// console.log(productOfArray([1, 2, 3, 10]));
