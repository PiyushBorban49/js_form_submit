const display = document.getElementById('Countries');
const btn = document.getElementById('btn');
const box = document.querySelector('.form_validation');
const show_result = document.getElementById('display');
btn.addEventListener('click',()=>{
    
    
    if(display.value == 1){
        show_result.innerText = "Visa required for most applicants.";
        show_result.style.color = "green";
    }
    if(display.value == 2){
        show_result.innerText = "Visa required unless you have an eTA.";
        show_result.style.color = "green";
    }
    if(display.value == 3){
        show_result.innerText = "Visa required before travel.";
        show_result.style.color = "green";
    }

    if(display.value == 4){
        show_result.innerText = "Visa depends on the duration of stay..";
        show_result.style.color = "green";
    }
    if(display.value == 5){
        show_result.innerText = "eVisa available for eligible travelers.";
        show_result.style.color = "green";
    }
    if(display.value == 6){
        show_result.innerText = "Please select a country.";
        show_result.style.color = "red";
    }
    
})