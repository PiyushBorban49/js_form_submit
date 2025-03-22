document.addEventListener("DOMContentLoaded", () => {
    const selectBox = document.getElementById('Countries');
    const button = document.getElementById('btn');
    const resultDisplay = document.getElementById('display');

    // GSAP Intro Animation
    gsap.from(".form_validation", { duration: 1, opacity: 0, scale: 0.8, ease: "back.out(1.7)" });

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

        // GSAP Animation for Result Display
        gsap.to(resultDisplay, { opacity: 1, y: 10, duration: 0.5, ease: "power1.out" });
    });
});
