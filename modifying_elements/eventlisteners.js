const button = document.querySelector("#my-button")
const link = document.querySelector("#reset-link")

// write your code below:
button.addEventListener("click", () => {
    button.innerText = "Clicked!";
    button.disabled = true;
    link.classList.remove("d-none");
})
link.addEventListener("click", () => {
    button.innerText = "Click me!";
    button.disabled = false;
    link.classList.add("d-none");
})