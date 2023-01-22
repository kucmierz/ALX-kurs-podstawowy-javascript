const todoForm = document.querySelector('#todoForm');
const authorInput = document.querySelector('#authorInput')
const messageInput = document.querySelector('#messageInput')

let currentTodos = JSON.parse(localStorage.getItem('todos'));

if (!currentTodos) {
    currentTodos = []
}


const fillInputs = () => {
    const currentId = parseInt(localStorage.getItem('currentTodoId'));
    const editElement = currentTodos.find(elem => elem.id === currentId);
    authorInput.value = editElement.author;
    messageInput.value = editElement.message;
}
fillInputs();

const handleSubmit = (event) => {
    event.preventDefault();

    if (!authorInput.value || messageInput.value.length < 2) {
        return alert('Blad walidacji!');
    }

    // findIndex - jest to funkcja do wyszukiwania indeksu elementu w tablicy obiektow
    // edycja jest to znalezienie indeksu elementu, ktory edytujemy
    // i edycji pol tego elementu.
    // Nastepnie potrzebujemy zapisac cala tablice obiektow z powrotem do LS
    const currentId = parseInt(localStorage.getItem('currentTodoId'));
    const editedTodoIndex = currentTodos.findIndex(todo => todo.id === parseInt(currentId));

    currentTodos[editedTodoIndex].message = messageInput.value;
    currentTodos[editedTodoIndex].author = authorInput.value;

    localStorage.setItem('todos', JSON.stringify(currentTodos));

    // Ta linijka odpowiada za przekierowanie
    window.location.href = 'index.html';
}

todoForm.addEventListener('submit', handleSubmit);

