
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; 

function addItem(e){
    // prevent that page reloads
    e.preventDefault();
    // create object with input from form, this. refers to form tag
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text, // text : text
        done: false
    };
    
    items.push(item);
    // store items to html
    populateList(items, itemsList);
    // set items array to local storage, persist data to keep it when page is reloaded
    localStorage.setItem("items", JSON.stringify(items));
    // reset from input field, reset is a method from form element
    this.reset(); 
}

function populateList(plates = [], platesList){ // default plates is an empty object
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // event delegation, check if triggered element is an input
    const element = e.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }


addItems.addEventListener("submit", addItem);
// keep state of checkbox on pagerelaod
itemsList.addEventListener('click', toggleDone);

//on pageload 
populateList(items, itemsList);