
const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handler));

let theLatestCheckedBox;

function handler(e) {

   let isThisABoxInBetween = false;

   // check if the shift key is down & check if the box is checked
   if (e.shiftKey && this.checked) {
   
    checkboxes.forEach(checkbox => {

      if (isThisABoxInBetween) {
        checkbox.checked = true;
      }
            
      if (checkbox === this || checkbox === theLatestCheckedBox) {
        isThisABoxInBetween = !isThisABoxInBetween;
      }
    });
  }

  theLatestCheckedBox = this;
}

