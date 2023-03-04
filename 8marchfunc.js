const accordion = document.querySelectorAll(".container__acc");

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}