const todoList = document.querySelector('#todoList');

let todos = JSON.parse(localStorage.getItem('todos'));

if (!todos) {
  todos = [];
}

const handleListClick = (event) => {
  if (event.target.id !== '') {

    const filteredResults = todos.filter(elem => elem.id !== +event.target.id);
    // dodanie plusika powoduje szybkie formatowanie stringa na number
    todos = filteredResults;
    localStorage.setItem('todos', JSON.stringify(todos));
    event.target.parentElement.remove();
  }
}


todos.forEach(todo => {
  todoList.innerHTML += `
      <li>
        <strong>${todo.author}</strong> napisal
        <p>${todo.message}</p>
        <button id="${todo.id}"> X </button>
      </li>
    `
})

todoList.addEventListener('click', handleListClick);