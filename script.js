document.addEventListener("DOMContentLoaded", () => {
    const selectBox = document.getElementById('Countries');
    const button = document.getElementById('btn');
    const resultDisplay = document.getElementById('display');

    button.addEventListener("click", () => {
        let message = "";
        let color = "green";

        switch (selectBox.value) {
            case "1":
                message = "Visa required for most applicants.";
                break;
            case "2":
                message = "Visa required unless you have an eTA.";
                break;
            case "3":
                message = "Visa required before travel.";
                break;
            case "4":
                message = "Visa depends on the duration of stay.";
                break;
            case "5":
                message = "eVisa available for eligible travelers.";
                break;
            case "6":
                message = "Please select a valid country.";
                color = "red";
                break;
            default:
                message = "Invalid selection.";
                color = "red";
        }

        resultDisplay.innerText = message;
        resultDisplay.style.color = color;

        // Remove hidden class and add visible class for smooth transition
        resultDisplay.classList.remove("hidden");
        resultDisplay.classList.add("visible");
    });
});
