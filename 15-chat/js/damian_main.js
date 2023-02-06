import { ref, push, remove, set, onValue } from "firebase/database";
import { database } from "./firebase";

const messageForm = document.querySelector('#messageForm');
const messageAuthor = document.querySelector('#messageAuthor');
const messageText = document.querySelector('#messageText');
const messagesList = document.querySelector('#messagesList');
const sortByLikes = document.querySelector('#sortByLikes');
const searchForm = document.querySelector('#searchForm');
const searchedPhrase = document.querySelector('#searchedPhrase');

const AUTHOR_ID = 2;

// Odczytywanie z firebase
const messageRef = ref(database, 'messages');

let messages = [];


const renderList = (array) => {
    messagesList.innerHTML = '';

    array.forEach(message => {
        messagesList.innerHTML += `
      <li class="message">
        <strong>${message.author}</strong> wrote:
        <p> ${message.message} </p>
        ${message.authorId === AUTHOR_ID
                ? `<button class="delete-button" data-id="${message.id}">Usuń</button>`
                : ''
            }
        <button class="like-it-button" data-messageid="${message.id}"> Like it! &hearts; </button>
        <span> ${message.likes} ${message.likes === 1 ? 'like' : 'likes'}</span>
        <a href="#" class="show-comments" data-linkid="${message.id}"> Zobacz komentarze (${!message.comments ? 0 : Object.values(message.comments).length})</a>

        <div class="hidden">
          <ul class="comments">
            ${!message.comments ? '' : Object.values(message.comments)
                .map(comment => {
                    return `<li> <strong>${comment.author}</strong> wrote: ${comment.message}</li>`
                }).join('')
            }
          </ul>
          <form class="comment-form">
            <label> Author <input type="text" class="comment-author"/></label>
            <label> Komentarz <input type="text" class="comment-comment"/></label>

            <button class="send-comment-button" data-postid="${message.id}" type="submit"> Wyslij </button>
          </form>
        </div>

      </li>
    `
    })

}

const handleSubmit = (event) => {
    event.preventDefault();

    if (!messageAuthor.value || messageText.value.length < 3) {
        return alert('Formularz wypelniony blędnie!');
    }

    const newMessage = {
        createdAt: Date.now(),
        author: messageAuthor.value,
        message: messageText.value,
        authorId: AUTHOR_ID,
        likes: 0,
    }

    push(messageRef, newMessage)

    // messages.push(newMessage)

    // Spread operator ES6
    // Mozemy uzyc spread operator zeby np. dodac element do listy na poczatek
    // messages = [newMessage, ...messages];

    // renderList();

    messageAuthor.value = '';
    messageText.value = '';
}

const handleLikeClick = (idToLike) => {
    const messageToChange = messages.find(message => message.id === idToLike);

    messageToChange.likes++;

    set(ref(database, `messages/${idToLike}`), messageToChange)
}

const handleComment = (postid, author, message) => {
    const messageToChange = messages.find(message => message.id === postid);

    const newComment = {
        author: author,
        message: message
    }

    // concat jest to metoda dodawania do tablicy, tak samo jak push, ale zwraca ona cala tablice zamiast indeksu nowego elementu

    messageToChange.comments = !messageToChange.comments
        ? [newComment]
        : Object.values(messageToChange.comments).concat(newComment)

    set(ref(database, `messages/${postid}`), messageToChange)
}

const handleListClick = (event) => {
    if (event.target.dataset.id) {
        // messages = messages.filter(message => {
        //   return message.id !== parseInt(event.target.dataset.id)
        // })

        remove(ref(database, `messages/${event.target.dataset.id}`));
    }

    if (event.target.classList.contains('like-it-button')) {
        handleLikeClick(event.target.dataset.messageid);
    }

    if (event.target.classList.contains('show-comments')) {
        const clickedElement = messages.find(elem => elem.id === event.target.dataset.linkid)
        const commentsNumber = !clickedElement.comments ? 0 : Object.values(clickedElement.comments).length;

        event.target.innerText = event.target.innerText.includes('Zobacz')
            ? `Ukryj komentarze (${commentsNumber})`
            : `Zobacz komentarze (${commentsNumber})`

        event.target.nextElementSibling.classList.toggle('hidden');
    }

    // Zdarzenie klikniecia w button submit
    if (event.target.classList.contains('send-comment-button')) {
        event.preventDefault();

        // Sposob jak robic wyszukiwanie wzgledem obecnego elementu
        const authorInput = event.target.parentElement.querySelector('.comment-author')
        const messageInput = event.target.parentElement.querySelector('.comment-comment')

        handleComment(event.target.dataset.postid, authorInput.value, messageInput.value);
    }
}

// Asynchronicznosc JS

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
    if (!sortByLikes.checked) {
        messages = messagesWithIdsFromFB.sort((prev, next) => prev.createdAt > next.createdAt ? -1 : 1);
    } else {
        messages = messagesWithIdsFromFB.sort((prev, next) => prev.likes > next.likes ? -1 : 1);
    }

    renderList(messages);
}

const handleClickSort = (ev) => {
    if (ev.target.checked) {
        messages.sort((a, b) => a.likes >= b.likes ? -1 : 1);
    } else {
        messages.sort((a, b) => a.createdAt >= b.createdAt ? -1 : 1);
    }

    renderList(messages);
}

const handleSearchSubmit = (ev) => {
    ev.preventDefault();
    if (searchedPhrase.value.length === 0) {
        filteredMessages = messages;
    }
    else {
        const phrase = searchedPhrase.value.toLowerCase();
        filteredMessages = messages.filter(elem => (elem.author.toLowerCase().includes(phrase) || elem.message.toLowerCase().includes(phrase)));
    }
    renderList(filteredMessages);
}

messagesList.addEventListener('click', handleListClick);
messageForm.addEventListener('submit', handleSubmit);
searchForm.addEventListener('submit', handleSearchSubmit);
sortByLikes.addEventListener('click', handleClickSort);

// Websockets
onValue(messageRef, handleData);