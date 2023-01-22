const todoList = document.querySelector("#todoList");
let todos = JSON.parse(localStorage.getItem("todos"));
if (!todos) todos = [];
// dla bezpieczenstwa czyszczenie zmiennej - gdyby ktos nie edytowal, a wrocil ze strony
localStorage.setItem("currentTodoId", "");
const handleListClick = (event)=>{
    // sprawdzenie klikania w link - do edycji
    if (event.target.href && event.target.dataset.editid) {
        // resetuje domyslne przekierowanie przy linku
        event.preventDefault();
        // przy edycji, potrzebuje do LS przekazac id elementu, ktory edytuje
        localStorage.setItem("currentTodoId", event.target.dataset.editid);
        // przejscie na strone edycji
        window.location.href = "/edit.html";
    }
    // sprawdzenie, iz klikam w guzik do usuwania
    if (event.target.dataset.id) {
        // console.log(event.target);
        // usuwanie z tablicy obiektow, raobimy zawsze za pomoca funkcji filter
        const filteredTodos = todos.filter((todo)=>{
            return todo.id !== parseInt(event.target.dataset.id);
        });
        // usuwanie z LS
        localStorage.setItem("todos", JSON.stringify(filteredTodos));
        // potrzebujemy nadpisac tablice todos, poniewaz chcemy usunac wiele elementow po sobie
        todos = filteredTodos;
        // usuwanie z html
        event.target.parentElement.remove();
    }
// ponizej moje rozwiazanie
// if (event.target.id !== '') {
//   const filteredResults = todos.filter(elem => elem.id !== +event.target.id);
//   // dodanie plusika powoduje szybkie formatowanie stringa na number
//   todos = filteredResults;
//   localStorage.setItem('todos', JSON.stringify(todos));
//   event.target.parentElement.remove();
// }
};
todos.forEach((todo)=>{
    todoList.innerHTML += `
      <li>
        <strong>${todo.author}</strong> napisal
        <p>${todo.message}</p>
        <a href="/edit.html" data-editid="${todo.id}"> Edycja > </a>
        <button id="${todo.id}" data-id="${todo.id}"> Usun </button>
      </li>
    `;
});
todoList.addEventListener("click", handleListClick);

//# sourceMappingURL=index.9345d665.js.map
