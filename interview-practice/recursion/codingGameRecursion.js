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
