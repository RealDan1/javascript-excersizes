function sort(arr) {
    //base case
    if (arr.length <= 1) {
        return arr; // if the array has 0 or 1 element in, return the array(its sorted)
    }
    let mid = Math.floor(arr.length / 2); //round down the length of the array divided by two to get the middle (roughly) of the array;
    let left = arr.slice(0, mid); // slice out the left of the array
    let right = arr.slice(mid); // slice out the right of the array

    return merge(sort(left), sort(right)); //recurse through sort(left) and sort(right) - then return the result of those two run through the merge function
}

function merge(left, right) {
    //create a new array to add the merged items to
    let merged = [];
    while (left.length && right.length) {
        // while the two arrays have elements, do this. we are shifting out of the two arrays so eventually the loop will quit
        if (left[0] <= right[0]) {
            merged.push(left.shift()); //add the left item to the merged array
        } else {
            merged.push(right.shift()); //otherwise the right item is largest, add the right item to the merged array
        }
    }
    return [...merged, ...left, ...right]; // return a new array with 1) merged, 2) left and 3) right. because the left and right arrays still might have elements in them left over
}

console.log(sort([3, 2, 1, 13, 8, 5, 0, 1]));
