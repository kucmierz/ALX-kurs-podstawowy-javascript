// DOM - Document Object Model

// DOM jest to obsluga HTML w JS
// aby skorzystac z DOM musze uzyc wbudowanego obiektu 'document'

// Wbudowane obiekty
//document
// console.log(document);//to przegladarka tworzy na poczatku ten dokument

// window
// console.log(window);//

// Interakcja z HTML

// querySelector - sluzy do lapania konkretnych elementow z HTML do pamieci JS
// Selektory:
// .klasa -> po klasie
// #id -> po id
// tag -> po tagu elementu (np. h1, p)
// ul li -> wszystkie li wewnatrz ul  - selektor dziecka
// const title = document.querySelector('h1');
// ID title jest zdefiniowany w HTML
const title = document.querySelector('#title');
console.log(title);
// metody na elemencie
// sluzy do zastepowania tekstu danego elementu
title.innerText = 'Nowy tekst :)';
// odczytanie tekstu
console.log(title.innerText);

// innerHTML sluzy do zastepowania zawartosci HTML danego elementu
title.innerHTML = 'Nowa tresc <i> z jakims html<i>';

const list = document.querySelector('#list');
// aby cokolwiek zmienic w HTML, wpierw nalezy go zlapac
// dopisywanie elementow do juz istniejacego
list.innerHTML += '<li>Wyniesc smieci</li>';
list.innerHTML += '<li>Odkurzyc</li>';

//.remove()
// title.remove();//usunie element

// 1. Napisz funkcje o nazwie addToHTML, ktorej zadaniem bedzie pobrac od uzytkownika jakas tresc, a nastepnie wstaw ta tresc do listy

const addNewTask = () => {
    const userTask = prompt('Wpisz swoje zadanie:');
    const list = document.querySelector('#list');
    // list.innerHTML += '<li>' + userTask + '</li>';
    list.innerHTML += `<li>${userTask}</li>`;
}

// addNewTask();

// Interakcja z atrybutami elementow HTML

// interakcja z klasami CSS
// dodamy do tagu klase css
title.classList.add('highlight');//wczesniej utworzylismy te klase w css
title.classList.remove('highlight');//usuwanie klasy
title.classList.toggle('highlight');// toggle klasy - jak jest to usunie, jak nie ma to doda
console.log(title.classList.contains('highlight'));
// title.classList.contains('highlight');//sprawdzanie czy jest dana klasa

// Interakcja z atrybutami
// skrocony sposob interakcji z atrybutami
// skrotowy sposob jest mozliwy dla ponizszych atrybutow
//value - dla input i select
// src - dla img
// alt - dla img
// id - dla wszystkich
// zmiana id: zlapany-element.nazwa-atrybutu = 'nowa-wartosc'
title.id = 'Dodaje-nowe-ID';
console.log(title.id);

// Pelny sposob interakcji z atrybutami
console.log(title.getAttribute('id'));
console.log(title.getAttribute('class'));

// nadpisywanie atrybutu, np. class wartoscia 'abc
// title.setAttribute('class','abc');
// title.setAttribute('id','123');

// Obsluga zdarzen - Event
// Eventy:
// click - klikanie
// keyup, keydown - wciskanie klawiszy
// submit - wysylka formularza
// lapiemy element wpierw
const button = document.querySelector('#clickMeButton');

const handleButtonClick = () => {
    console.log('Wcisnales mnie!!');
    title.classList.toggle('highlight');
}

// addEventListener - funkcja przyjmujaca dwa elementy - rodzaj eventu oraz funkcje ktora ma sie uruchomic po zajsciu eventu
//przechwycenie klikniecia, jakie zdarzenie i jaka funkcja ma sie wykonac po kliknieciu
button.addEventListener('click', handleButtonClick);


// obsluga formularza w JS

// lapiemy formularz
const form = document.querySelector('#todoForm');
//lapiemy input
const todoInput = document.querySelector('#todoTask');
//zlapanie listy
const todoList = document.querySelector('#todoList');
//funkcja do formularza
//wyslanie formularza, submit, to odswiezenie strony - akcja z automatu
//musimy zatrzymac to - dodajemy parametr event
const handleSubmit = (event) => {
    // jest to funkcja wewnatrz wbudowanego obiektu event i sluzy ona do zatrzymania domyslnej akcji przegladarki
    event.preventDefault();
    // console.log(event);
    console.log('Formularz wyslany');

    //tekst inputa dostepny jest pod todoInput.value
    // console.log(todoInput.value);
    
    //dodanie zadania do listy
    // todoList.innerHTML+=(`<li>${todoInput.value}</li>`);
    todoList.innerHTML+=(`<li class="list-item">${todoInput.value}</li>`);

    //resetowanie wartosci inputa
    todoInput.value='';
    //alternatywna metoda
    // todoInput.setAttribute('value','');
}


// dodajemy obsluge zdarzen - submit
form.addEventListener('submit', handleSubmit);

