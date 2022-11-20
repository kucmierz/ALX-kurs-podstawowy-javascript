// Zadanie domowe DOM

// 1. Stworz w HTML formularz, oraz liste. Formularz niech zawiera 2 pola input: author oraz message. Zrob obsluge formularza w taki sposob, aby pod formularzem wyswietlic w liscie tekst

// - Kurs ALX jest fajny - Damian
// - Dzis jest brzydka pogoda - Agnieszka

const form = document.querySelector('#communicatorForm');
const authorInput = document.querySelector('#authorInput');
const msgInput = document.querySelector('#msgInput');
const listOfMsgs = document.querySelector('#communicatorList');



const resetForm = () => {
    authorInput.value = '';
    msgInput.value = '';
}

const sendMsg = () => {
    const msg = msgInput.value;
    const author = authorInput.value;

    listOfMsgs.innerHTML += `<li><strong>@${author}:</strong> ${msg}</li>`;
    resetForm();
}


// form.addEventListener('submit', sendMsg);


// 2. Pod formularzem, stworz przycisk Remove List, ktory po kliknieciu ma usunac wszystkie elementy listy.
const btnRemoveList = document.querySelector('#removeList');

const removeList = () => {
    listOfMsgs.innerHTML = '';
}

btnRemoveList.addEventListener('click', removeList);

// 3*. Zrob walidacje formularza w taki sposob, zeby nie mozna bylo wyslac wiadomosci jesli ktorykolwiek z inputow jest pusty.

const validationForm = (event) => {
    event.preventDefault();
    if (authorInput.value === '' || msgInput.value === '') {
        alert('Musisz uzupelnic wszystkie pola');
    } else {
        sendMsg();
    }
}
form.addEventListener('submit', validationForm);

// 4*. Ostyluj zadanie