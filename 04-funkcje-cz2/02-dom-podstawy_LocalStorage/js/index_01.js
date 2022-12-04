
// lapiemy formularz
const form = document.querySelector('#todoForm');
//lapiemy input
const todoInput = document.querySelector('#todoTask');
//zlapanie listy
const todoList = document.querySelector('#todoList');

let todos = [];
const todosFromLS = JSON.parse(localStorage.getItem('todos'));
// podmien pusta tablice todos tylko wtedy, kiedy istnieja jakies todosy w LS
if (todosFromLS) {
    todos = todosFromLS;
}

const handleSubmit = (event) => {
    // jest to funkcja wewnatrz wbudowanego obiektu event i sluzy ona do zatrzymania domyslnej akcji przegladarki
    event.preventDefault();
    console.log('Formularz wyslany');

    const newToDo = {
        id: Date.now(),//zwraca konkretna sekunde w zapisie UNIXowym (tzw timestamp)
        title: todoInput.value
    }
    todos.push(newToDo);
    // do LS potrzebuje zapisac cala kolekcje todosow, poniewaz one beda odczytywane w momencie wczytywania strony
    localStorage.setItem('todos', JSON.stringify(todos));

    todoList.innerHTML += (`<li class="list-item">${todoInput.value}</li>`);

    //resetowanie wartosci inputa
    todoInput.value = '';
}

// dodajemy obsluge zdarzen - submit
form.addEventListener('submit', handleSubmit);

todos.forEach(todo => {
    // musi tutaj byc todo.title bo w takiej formie zapisujemy to do LS
    todoList.innerHTML += `
      <li class="list-item"> ${todo.title} </li><li
    `
})