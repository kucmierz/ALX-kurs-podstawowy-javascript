const todoForm = document.querySelector('#todoForm');
const authorInput = document.querySelector('#author');
const messageInput = document.querySelector('#message');
const todoList = document.querySelector('#todoList');

const handlingForm = (event) => {
    event.preventDefault();
    todoList.innerHTML += `
    <li>
    <strong>${authorInput.value}</strong><p>${messageInput.value}</p>
    </li>
    `;
    authorInput.value = '';
    messageInput.value = '';
}

todoForm.addEventListener('submit', handlingForm);