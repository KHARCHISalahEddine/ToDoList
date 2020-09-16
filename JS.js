const addForm = document.querySelector(".add");
const ul = document.querySelector("ul");
const search = document.querySelector(".search input");

const generateTemplate = todo => {
  if (todo.lengh)
    // or if (todo === '')
    addForm.add.placeholder = "please right a something";
  else {
    const HTML = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
      </li>`;
    ul.innerHTML += HTML;
    addForm.add.placeholder = "You can add an other";
  }
};

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  generateTemplate(todo);
  // addForm.add.value = ""; this or this ↓ bellow
  addForm.reset();
});

// To delete an Item from the the liste of the items
ul.addEventListener("click", e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// Search
const filterTodos = term => {

  Array.from(ul.children)
  .filter(item => !item.textContent.includes(term))
  .forEach(item => item.classList.add('d-none'));
  
  
  Array.from(ul.children)
  .filter(item => item.textContent.includes(term))
  .forEach(item => item.classList.remove('d-none'));

};

search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodos(term);
});
