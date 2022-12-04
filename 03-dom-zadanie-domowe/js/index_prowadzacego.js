// Zadanie domowe DOM

{/* <h1 id="title">Moje tekst</h1> */ }

// const title = document.querySelector('#title');

// title.innerText = 'Nowy tekst'
// title.innerHTML = '<p> Wstawie ten element p do srodka h1</p>'


// console.log(title.id) // skrotowy
// console.log(title.getAttribute('id')); // pelny

// title.id = 'nowy-id';
// title.setAttribute('id', 'nowy-id')


{/* <button id="btn">Click me</button> */ }

// click, scroll, submit, keyup, keydown, resize

// const button = document.querySelector('#btn');


// function handleClick (event) {
//   event.preventDefault(); // przerwanie domyslego zachowania przegladarki

//   console.log('Hej!');
// }

// button.addEventListener('click', handleClick)



// 1. Stworz w HTML formularz, oraz liste. Formularz niech zawiera 2 pola input: author oraz message. Zrob obsluge formularza w taki sposob, aby pod formularzem wyswietlic w liscie tekst

// - Kurs ALX jest fajny - Damian
// - Dzis jest brzydka pogoda - Agnieszka

// 2. Pod formularzem, stworz przycisk Remove List, ktory po kliknieciu ma usunac wszystkie elementy listy.

// 3*. Zrob walidacje formularza w taki sposob, zeby nie mozna bylo wyslac wiadomosci jesli ktorykolwiek z inputow jest pusty.

// 4*. Ostyluj zadanie


const form = document.querySelector('#messagesForm');
const list = document.querySelector('#messagesList');
const removeButton = document.querySelector('#removeButton');

const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');

const handleSubmit = (event) => {
  event.preventDefault();
  let valid = true;

  if (authorInput.value.length === 0 || messageInput.value.length === 0) {
    valid = false;
  }

  if (valid) {
    list.innerHTML += `
      <li class="messages-item"> ${messageInput.value} - <strong>${authorInput.value} </strong></li>
    `

    authorInput.value = '';
    messageInput.value = '';
  } else {
    alert('Wypelnij pola formularza');
  }
}

const removeMessages = () => {
  list.innerHTML = '';
}

form.addEventListener('submit', handleSubmit);
removeButton.addEventListener('click', removeMessages)

// ----- Podstawy Programowania funkcyjnego -----

const numbers = [10, 20, 30];

for(let number of numbers) {
  console.log(number) // Najpierw 10, potem 20, potem 30
}

// 1. forEach

// number jest to ten element tablicy, przez ktory aktualnie przechodzi petla

// numbers.forEach((number) => {
//   console.log(number);
// })

let sum5 = 0;

// petla forEach w srodku wyglada tak samo jak petla for of
numbers.forEach((number) => {
  sum5 += number;
})

// Zoptymalizowana funckja strzalkowa forEach
// numbers.forEach(number => sum5 += number)

console.log(sum5);

// Funkcja strzalkowa moze byc zoptymalizowana (zapisana krocej)

// 1. Jesli funkcja strzalkowa przyjmuje tylko 1 parametr, to moge usunac nawiasy przy parametrze

// 2. Jesli funkcja strzalkowa wykonuje tylko 1 rzecz, to mozemy usunac klamry i slowo kluczowe return

// const roundNumber = (number) => {
//   return Math.round(number);
// }

const roundNumber = number => Math.round(number);

console.log(roundNumber(12.70));

// addEventListener nie potrzebuje posiadac funkcji na drugi parametr, mozna od razu uruchomic funkcje tzw anonymous.

// Ta druga funkcje w addEventListener mozemy nazwac tez funkcja callback.

// button.addEventListener('click', (event) => {
//   event.preventDefault();

//   console.log('hej!')
// })



// -------------   forEach cwiczenia -------------

// 1. Wez zadanie 1 z zadania domowego i przerob go na forEach

// 2. Majac tablice wzrostow, policz srednia wzrostu

// const pplHeights = [180, 160, 170]

// 3. Przerobc zadanie 4 z zadania domowego na forEach