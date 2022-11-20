// DOM - Document Object Model

// DOM jest to obsluga HTML w JS

// Aby skorzystac z DOM musze uzyc wbudowanego obiektu document

// 1. Wbudowane obiekty

// document - DOM
// console.log(document);

// window - obiekt okna przegladarki
// console.log(window);

// 2. Interakcja z HTML

// - querySelector

// querySelector jest to metoda sluzaca do lapania konkretnych elementow z HTML do pamieci JS

// Selektory:

// .klasa -> po klasie
// #id -> po id
// tag -> po tagu elementu
// ul li -> wszystkie li wewnatrz ul

// ID title jest zdefiniowany w HTML
const title = document.querySelector('#title')
// console.log(title);

const list = document.querySelector('#list')

// Metody na elemencie

// innerText sluzy do zastepowania tekstu danego elementu
// title.innerText = 'Nowy tekst :)';
// Odczytanie tekstu
// console.log(title.innerText)

// innerHTML sluzy do zastepowania zawartosci HTML danego elementu

// title.innerHTML = 'Nowy tekst <i> z jakims html </i>'

// Dopisywanie elementow do juz istniejacego (potrzebujemy uzyc +=)
// list.innerHTML += `
//   <li> Wynieść smieci </li>
// `

// .remove()

// title.remove(); // metoda sluzaca do usuwania danego elementu


// 1. Napisz funkcje o nazwie addToHTML, ktorej zadaniem bedzie pobrac od uzytkownika jakas tresc, a nastepnie wstaw ta tresc do listy

// const addToHTML = () => {
//   const taskName = prompt('Co chcesz dzisiaj zrobić?');

//   list.innerHTML += `
//     <li> ${taskName} </li>
//   `
// }

// addToHTML();

// - Interakcja z atrybutami elementow HTML

// Interakcja z klasami CSS

title.classList.add('highlight'); // dodawanie klasy
title.classList.remove('highlight'); // usuwanie klasy
title.classList.toggle('highlight'); // toggle klasy (jak nie ma to sie pojawia, jak jest to znika)
title.classList.contains('highlight'); // sprawdzanie czy jest dana klasa

// Interakcja z atrybutami

// Skrocony sposob interakcji z atrybutami
// Skrotowa sposob jest mozliwy dla poniszych atrybutow

// value - dla inputa i selecta
// src - dla img
// alt - dla img
// id - dla wszystkich

// zlapany-element.nazwa-atrybutu = 'nowa-wartosc'
// title.id = 'new-id'; // Zapis atrybutu
// console.log(title.id); // Odczyt atrybutu

// Pelny sposob interakcji z atrybutami

// Pobieranie wartosci atrybutow
// console.log(title.getAttribute('id'));
// console.log(title.getAttribute('class'));

// Nadpisywanie wartosci atrybutow
// title.setAttribute('class', 'abc');
// title.setAttribute('id', '123');

// Eventy

// click - klikanie
// keyup, keydown - wciskanie klawiszy
// submit - wysylka formularza

const button = document.querySelector('#clickMeButton');

const handleButtonClick = () => {
  // console.log('Hej, wcisnales mnie?');

  // kazdorazowe klikniecie w przycisk, spowoduje dodanie albo usuniecie klasy highlight
  title.classList.toggle('highlight');
}

// addEventListener
// addEventListener jest to funkcja przyjmujaca 2 argumenty
// - rodzaj eventu
// - funkcja, ktora ma sie uruchomic, jak ten event sie zdarzy
button.addEventListener('click', handleButtonClick)

// Obsluga formularza w JS

const form = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoTask');
const todoList = document.querySelector('#todoList');

// Wbudowany obiekt event wystepuje tylko w funkcjach, ktore sa uruchamiane przez funkcje addEventListener

const handleSubmit = (event) => {
  // console.log('Hej, zostalem klikniety!');

  // event.preventDefault() jest to funkcja wewnatrz wbudowanego obiektu event i sluzy ona do zatrzymania domyslnej akcji przegladarki
  event.preventDefault();

  // tekst inputa jest dostepny pod todoInput.value
  // console.log(todoInput.value); // tresc inputa

  // Po kliknieciu w przycisk submitujacy, my dodajemy nowy element do HTML, pobierajac obecna wartosc inputa
  todoList.innerHTML += `
    <li class="list-item"> ${todoInput.value} </li>
  `;

  // wyzerowanie wartosci inputa
  todoInput.value = '';
  // todoInput.setAttribute('value', '')
}

// musimy pamietac, ze w formularzu obslugujemy event submit
form.addEventListener('submit', handleSubmit)