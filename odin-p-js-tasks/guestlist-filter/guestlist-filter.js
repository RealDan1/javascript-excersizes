const people = [
    "Chris",
    "Anne",
    "Colin",
    "Terri",
    "Phil",
    "Lola",
    "Sam",
    "Kay",
    "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
// admitted.textContent = "Admit: ";
// refused.textContent = "Refuse: ";
let toAdmit = "Admit: ";
let toRefuse = "Refuse: ";

// loop starts here
for (const person of people) {
    if (person === "Phil" || person === "Lola") {
        toRefuse += person + ", ";
    } else {
        toAdmit += person + ", ";
    }
}

toAdmit = toAdmit.slice(0, -2) + ".";
toRefuse = toRefuse.slice(0, -2) + ".";

refused.textContent = toRefuse;
admitted.textContent = toAdmit;
// refused.textContent += ;
// admitted.textContent += ;
