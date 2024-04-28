let n = parseInt(prompt("please input n larger than one please"));
let printString = "";
for (let i = 1; i < n; i++) {
    if (i % 1 === 0 && i % n == 0) {
        printString = printString + "," + i;
    }
}
console.log(printString);
