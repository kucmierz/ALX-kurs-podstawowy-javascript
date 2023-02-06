import { ref, push, remove, onValue, set } from "firebase/database";
import { database } from "./firebase";

const newPostForm = document.querySelector('#new-post-form');
const author = document.querySelector('#author');
const message = document.querySelector('#message');
const chatMessages = document.querySelector('#chat-messages');
const AUTHOR_ID = 2;
let messages = [];

const messageRef = ref(database, 'messages');

const showMessages = (msgArray) => {
    chatMessages.innerHTML = '';
    msgArray.forEach(msg => {
        chatMessages.innerHTML += `
        <li>
            <strong>${msg.author}:</strong>
            <span>${msg.message}</span>
            <span>${msg.likes}</span>
            <span class="like-me" data-likeid="${msg.id}">I like it!</span>
            <span class="remove-me" data-id="${msg.id}">X</span>
        </li>
        `;
    });
}

const handleNewPost = (ev) => {
    ev.preventDefault();
    if (!author.value || message.value.length < 3) {
        return alert('Formularz wypelniony blednie');
    }

    const newMsg = {
        createdAt: Date.now(),
        author: author.value,
        message: message.value,
        authorId: AUTHOR_ID,
        likes: 0
    }
    push(messageRef, newMsg);
    // zerowanie formularza
    author.value = '';
    message.value = '';
}

const handleRemoveMsg = (ev) => {
    if (ev.target.dataset.id) {
        remove(ref(database, `messages/${ev.target.dataset.id}`));
    }

    if (ev.target.dataset.likeid) {

        const clickedElement = messages.find(elem => elem.id === ev.target.dataset.likeid);
        console.log(clickedElement);
        let newLike = clickedElement.likes + 1;
        console.log(newLike);

        set(ref(database, `messages/${ev.target.dataset.likeid}`), {
            createdAt: clickedElement.createdAt,
            author: clickedElement.author,
            message: clickedElement.message,
            authorId: clickedElement.authorId,
            likes: newLike
        });
    }
}

const handleData = (data) => {
    // toJSON() jest to metoda firebase, ktora sluzy do zamiany przychodzacych danych na format javascriptowy;
    const messagesFromFB = data.toJSON();

    // Object.values tworzy tablice z wartosci kluczy obiektu
    // console.log(Object.values(messages));

    const messagesWithIdsFromFB = !messagesFromFB ? [] : Object.keys(messagesFromFB).map(key => {
        return {
            ...messagesFromFB[key],
            id: key,
        }
    })
    // potrzebuje to przesortowac, poniewaz elementy dodane pozniej maja wieksze createdAt
    messages = messagesWithIdsFromFB.sort((prev, next) => prev.createdAt > next.createdAt ? -1 : 1);

    showMessages(messages);
}


newPostForm.addEventListener('submit', handleNewPost);
chatMessages.addEventListener('click', handleRemoveMsg);

onValue(messageRef, handleData);