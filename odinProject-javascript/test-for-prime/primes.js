let n;
n = parseInt(prompt("please input n larger than one please"));
let printString = "";
let prime = false;
let potentialPrime;
outerloop: for (let i = 2; i <= n; i++) {
    prime = false;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue outerloop;
        }
    }
    potentialPrime = i;
    printString += "," + potentialPrime;
    prime = false;
}

const bodyElement = document.getElementById("myBody");
// Change the text content
bodyElement.textContent = printString;
console.log(printString);
console.log(
    "aftertest string to make sure the browser hasnt frozen during the code"
);

// else {
//     prime = false;
//     continue;
// }
