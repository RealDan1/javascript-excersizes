let n = 10;
//parseInt(prompt("please input n larger than one please"));
let printString = "";
for (let i = 2; i < n; i++) {
    if (n % 1 === 0 && i % 1 === 0 && n % i > 0) {
        printString = printString + "," + i;
        console.log("test1");
    }
}

const bodyElement = document.getElementById("myBody");
// Change the text content
bodyElement.textContent = printString;
console.log(printString + "this text should work - test 2");
console.log("aftertest");
