
const btnBrev = document.getElementById("previous");
const btnNext = document.getElementById("next");
console.log(btnNext)
const bullets =[...document.querySelectorAll(".bullets")]; 


const maxSteps = 4;
let currentStep = 1;

btnNext.addEventListener('click', () =>{
    bullets[currentStep-1].classList.add('completed');

    bullets[currentStep-1].classList.add('bullets-border');
    
    currentStep++;
    btnBrev.disabled = false;

    if( currentStep === maxSteps){
        btnNext.disabled = true;
        bullets[3].style.backgroundColor = "#fff";


    }
    bullets[currentStep-1].classList.add('bullets-border');


    


} );

btnBrev.addEventListener('click', () =>{


    bullets[currentStep-2].classList.remove('completed');
    bullets[currentStep-1].classList.remove('bullets-border');
    bullets[3].style.backgroundColor = "";
    bullets[0].classList.add('bullets-border');

    currentStep--;
    btnNext.disabled = false;

    if( currentStep === 1){
        btnBrev.disabled = true
        

    }

});