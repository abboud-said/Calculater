

let calculation = localStorage.getItem('calculation') || ``;

displayCalculation();

function calculate(number){


  calculation += number;

  localStorage.setItem('calculation', 
  calculation);
  let result = 
localStorage.getItem('calculation');
  console.log(result);
  displayCalculation();

}

function displayCalculation(){
  console.log(document.querySelector('.js-display')
.innerHTML = calculation);
}