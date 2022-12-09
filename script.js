let birth = document.querySelector('#birthday');
let lucky = document.querySelector('#luckyNo');
const btn = document.querySelector('#find');
const display = document.querySelector('#display'); 

btn.addEventListener('click',()=>{
  birth = birth.value;
  lucky = lucky.value;
  birth = birth.slice(0,4)+birth.slice(5,7)+birth.slice(8,10)
  
  if(birth%lucky==0){
    displayMessage("Yay! Your birthday is lucky.")
  } 
  else {
    displayMessage("Sorry, but your birthday is not lucky.");
  }
});
function displayMessage(mssg){
  display.innerText =  mssg; 
}