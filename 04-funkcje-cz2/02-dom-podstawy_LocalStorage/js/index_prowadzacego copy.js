const form = document.querySelector('#messagesForm');
const list = document.querySelector('#messagesList');
const removeButton = document.querySelector('#removeButton');

const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');

let messages = [];

const messagesFromLS = JSON.parse(localStorage.getItem('messages'))

if (messagesFromLS) {
  messages = messagesFromLS;
}

const handleSubmit = (event) => {
  event.preventDefault();

  if (authorInput.value.length === 0 || messageInput.value.length === 0) {
    return alert('Wypelnij pola formularza');
  }

  const newMessage = {
    id: Date.now(),
    message: messageInput.value,
    author: authorInput.value
  }

  messages.push(newMessage)
  localStorage.setItem('messages', JSON.stringify(messages));

  list.innerHTML += `
    <li class="messages-item"> ${messageInput.value} - <strong>${authorInput.value} </strong></li>
  `

  authorInput.value = '';
  messageInput.value = '';
}

const removeMessages = () => {
  list.innerHTML = '';
}

form.addEventListener('submit', handleSubmit);
removeButton.addEventListener('click', removeMessages)

messages.forEach(message => {
  list.innerHTML += `
    <li class="messages-item"> ${message.message} - <strong>${message.author} </strong></li>
  `;
})