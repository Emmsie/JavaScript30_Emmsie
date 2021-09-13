
const panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

function toggleOpen(){
    this.classList.toggle("open"); // fires transitioning
}

function toggleActive(e){
    //console.log(e.propertyName) // list the transitioned events

    if(e.propertyName.includes("flex")){
       this.classList.toggle("open-active"); 
    }
}
