const form = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoTask');
const todoList = document.querySelector('#todoList');

let todos = [];

const todosFromLS = JSON.parse(localStorage.getItem('todos'));

// Podmien pusta tablice todos tylko wtedy, kiedy istnieja jakies todosy w localStorage
if(todosFromLS) {
  todos = todosFromLS
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newTodo = {
    id: Date.now(), //Date.now() zwraca ilosc milisekund w zapisie UNIXowym (tzw timestamp)
    title: todoInput.value
  }

  todos.push(newTodo);
  // do localStorage potrzebuje zapisac cala kolekcje todosow, poniewaz one beda odczytywane w momencie wczytywania strony
  localStorage.setItem('todos', JSON.stringify(todos))

  todoList.innerHTML += `
    <li class="list-item"> ${todoInput.value} </li>
  `;

  todoInput.value = '';
}

form.addEventListener('submit', handleSubmit);

todos.forEach(todo => {
  // musi tutaj byc todo.title bo w takiej formie zapisujemy to do LS
  todoList.innerHTML += `
    <li class="list-item"> ${todo.title} </li><li
  `
})