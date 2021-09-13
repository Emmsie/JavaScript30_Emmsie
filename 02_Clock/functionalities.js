
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsToDegrees = ((seconds/60) *360) + 90;
    const minutesToDegrees = ((minutes/60)*360)  + 90;
    const hoursToDegrees = ((hours/12)*360)  + 90;

    if(seconds == 0){
        secondHand.style.transition = `0s`;
    } 
    if(minutes == 0){
        minuteHand.style.transition = `0s`;
    } 
    if(hours == 0){
        hourHand.style.transition = `0s`;
    } 

    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`; 
   }

setInterval(setDate, 1000);