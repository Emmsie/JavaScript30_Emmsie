
const pressedKeys = [];

const secretCodeForEasterEgg = "egg";

window.addEventListener("keyup", (e) => {
    // key logging of all pressed keys
    pressedKeys.push(e.key);
    // limiting size array pressedKeys to secretCode size (instead of logging all keys)
    // start of splice: if negative, it will begin that many elements from the end of the array
    pressedKeys.splice(-secretCodeForEasterEgg.length -1, pressedKeys.length - secretCodeForEasterEgg.length) 

    if(pressedKeys.join('').includes(secretCodeForEasterEgg)){
        cornify_add(); // method from external cornify script
    }
})