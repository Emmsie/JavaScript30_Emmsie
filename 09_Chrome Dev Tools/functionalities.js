
const dogs = [{ name: 'Snickers', age: 8 }, { name: 'Ronaldo', age: 3 }];

const paragraphs = document.querySelectorAll(".colorSwitch");
paragraphs.forEach(element => element.addEventListener("click", makeBlush));
    

function makeBlush(e) {
  this.style.color = '#E30B5D';
  this.style.fontSize = '50px';
}

const koala = "🐨";

// DOM breakpoint
// to see where JS cicks in: 
//in elements/html of chrome dev tool: right click on the element/break on/attribute modifications
//start event (here it is clicking on the text)
// + remove breakpoint after checking where JS was located

// Regular
console.log("Hi");

// Interpolated
console.log("Hello, I'm a %s!",koala);
console.log(`Hi there ${koala}`); 

// Styled
console.log("%c Hi, I'm some fancy text ", 'font-size:40px; background:mintcream; text-shadow: 5px 5px 5px lime;')

// warning!
console.warn("WARNING: OMG!");

// Error :|
console.error("ERROR: no eucalyptus found");

// Info
console.info("INFO: Koalas like snacking on eucalyptus");

// Testing
//assert throws an error in the console when result is false, nothing when true
const colorSwitch = document.querySelector(".colorSwitch");
console.assert(colorSwitch.classList.contains("colorSwitch"), "Test colorSwitch.classList.contains('colorSwitch')failed");
console.assert(colorSwitch.classList.contains("colorRitch"), "Test colorSwitch.classList.contains('colorRitch') failed");

// clearing, clears console log
  //console.clear();

// Viewing DOM Elements
console.dir(colorSwitch); // shows properties and methods of the element
console.log(colorSwitch); // shows element itself

// Grouping together
dogs.forEach(dog => console.log(`${dog.name} says hello`));

dogs.forEach(dog => {
  //console.group(`${dog.name}`);  
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count(koala);
console.count(koala);
console.count("one");
console.count(koala);
console.count("one");

// timing
console.time("string to define timer"); // start timer
  // do stuff 
console.timeEnd("string to define timer");

//table
console.table(dogs);
