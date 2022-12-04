
const form = document.querySelector('#messagesForm');
const list = document.querySelector('#messagesList');
const removeButton = document.querySelector('#removeButton');

const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');

let msgs = [];

const msgsFromLS = JSON.parse(localStorage.getItem('msgs'));
if (msgsFromLS) {
  msgs = msgsFromLS;
}

const handleSubmit = (event) => {
  event.preventDefault();

  if (authorInput.value.length === 0 || messageInput.value.length === 0) {
    return alert('Wypelnij pola formularza');
  }

  const newMsg = {
    id: Date.now(),
    author: authorInput.value,
    message: messageInput.value
  }

  msgs.push(newMsg);
  localStorage.setItem('msgs', JSON.stringify(msgs));

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

msgs.forEach(msg => {
  list.innerHTML += `
  <li class="messages-item"> ${msg.message} - <strong>${msg.author} </strong></li>
  `
})

// Zadanie dla was

// 1. Przekopiuj folder 03-dom-zadanie-domowe i stworz folder 06-dom-messages-localstorage
// 2. Zrob obsluge odczytywania i zapisywania do localStorage
// 3. Zrob obsluge usuwania z localStorage (po wcisnieciu guzika removeTodos uruchom funkcje localStorage.removeItem('X'))