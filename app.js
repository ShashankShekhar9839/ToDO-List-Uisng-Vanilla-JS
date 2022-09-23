// fetching the input tasks and btn using class

let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');


// making the add button disabled till the user does not enter anything
input.addEventListener('keyup', () => {

  //  classList used to add,toggle or remove css classes from the list 
  if (input.value.trim() !== 0) {
    addBtn.classList.add('active')
  }
  else {
    addBtn.classList.remove('active');
  }
});

// add new item to list
// arrow functions are used

addBtn.addEventListener('click', () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `<p> ${input.value} </p>

    <div class="item-btn">
       <i class="fa-solid fa-pencil"></i>
       <i class="fa-solid fa-xmark"></i>
    
    </div>`

    
    // append child for adding an element as the last child of an element
    tasks.appendChild(newItem);
    input.value = '';


  }
  else {
    alert('Please Enter a task');
  }

});

// delete item from the list

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-xmark')) {
    e.target.parentElement.parentElement.remove();
  }
});

// mark items as completed

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-pencil')) {
    e.target.parentElement.parentElement.classList.toggle('item-completed');
  }
});

