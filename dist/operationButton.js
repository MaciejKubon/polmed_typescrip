//Obsługa przycisku rozwijania
const expandCalender = [
    {
        // from
        opacity: 0,
        height: "0px",
    },
    {
        // to
        opacity: 0,
        height: "480px",
    },
    {
        opacity: 1,
    },
];
const moreTermButton = document.querySelector("#moreTerm");
let pressBool = false;
moreTermButton.addEventListener("click", (event) => {
    const hoverButtonElement = document.querySelectorAll(".day div");
    hoverButtonElement.forEach((element) => {
        if (!pressBool)
            element.animate(expandCalender, 1000);
        element.toggleAttribute("hidden");
    });
    pressBool
        ? (moreTermButton.innerHTML = "Rozwiń")
        : (moreTermButton.innerHTML = "Zwiń");
    pressBool = !pressBool;
    console.log(pressBool);
});
//Obsługa wyboru rodzaju wizyty
const price_of_visit = {
    "-": "-",
    "wizyta kontrolna": 180,
    konsultacja: 200,
    choroba: 240,
    "wypisanie recepty": 80,
    szczepienie: 210,
};
const changeTypeOfVisit = document.querySelector("#typeOfVisit");
changeTypeOfVisit.addEventListener("change", () => {
    const changePrice = document.querySelector("#price");
    changeTypeOfVisit.value == "-"
        ? (changePrice.innerHTML = price_of_visit[changeTypeOfVisit.value])
        : (changePrice.innerHTML = price_of_visit[changeTypeOfVisit.value] + " zł");
});
