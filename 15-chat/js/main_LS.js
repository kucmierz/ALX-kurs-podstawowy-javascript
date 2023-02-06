const newPostForm = document.querySelector('#new-post-form');
const author = document.querySelector('#author');
const message = document.querySelector('#message');
const chatMessages = document.querySelector('#chat-messages');

let messages = JSON.parse(localStorage.getItem('messages'));

if (!messages) {
    messages = [];
}

const showMessages = (msgArray) => {
    chatMessages.innerHTML = '';
    msgArray.forEach(msg => {
        chatMessages.innerHTML += `
        <li>
            <strong>${msg.author}:</strong>
            <span>${msg.message}</span>
            <span class="remove-me" data-id="${msg.id}">X</span>
        </li>
        `;
    });
}
showMessages(messages);

const handleNewPost = (ev) => {
    ev.preventDefault();
    if (!author.value || message.value.length < 3) {
        return alert('Formularz wypelniony blednie');
    }

    const newMsg = {
        id: Date.now(),
        author: author.value,
        message: message.value
    }
    // messages.push(newMsg);//dodaje na koncu listy
    // Spread operator
    //nowa tablica zawierajaca nowy element na pierwszym miejscu, a pozostale pozniej, po niej
    messages = [newMsg, ...messages];
    localStorage.setItem('messages', JSON.stringify(messages));
    showMessages(messages);
    // zerowanie formularza
    author.value = '';
    message.value = '';
}

const handleRemoveMsg = (ev) => {
    ev.preventDefault();
    if (!ev.target.dataset.id) {
        return 0
    }
    const idToRemove = parseInt(ev.target.dataset.id);
    messages = messages.filter(el => el.id !== idToRemove);
    localStorage.setItem('messages', JSON.stringify(messages));
    // ev.target.parentElement.remove();
    showMessages(messages);
}

newPostForm.addEventListener('submit', handleNewPost);
chatMessages.addEventListener('click', handleRemoveMsg);