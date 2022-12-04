// slowo kluczowe return

const sumTwoNumbers = (a, b) => {
    // slowo kluczowe return zwraca wartosc funkcji do miejsca jej wywolania
    return a + b;
}

const checkNumber = (number) => {
    //wzor na parzystosc
    if (number % 2 === 0) {
        return 'Liczba jest parzysta';
    } else {
        return 'Liczba jest nieparzysta';
    }
}

const result = sumTwoNumbers(10, 21);
console.log(result);
console.log(checkNumber(result));

// -- 2 wlasciwosc return: early return
const addTwoNumbers = (a, b) => {
    // w JS jest specjalna funkcja sprawdzajaca typ zmiennych - typeof
    // console.log(typeof a);
    // console.log(typeof b);
    // return dziala tak, iz w momencie w ktorym wystapi, wychodzi z funkcji
    // ten pattern nazywa sie early return
    if (typeof a !== 'number' || typeof b !== 'number') {
        return;
    }

    return a + b;
}

console.log(addTwoNumbers(7, 9));
console.log(addTwoNumbers(7, 'Marek'));

// funkcja kto jest starszy
// const age1 = pasrseInt(prompt('Podaj ile masz lat? (czlowiek1)'));
// const age2 = parseInt(prompt('Podaj ile masz lat? (czlowiek2)'));

// function whoIsOlder(person1Age, person2Age) {
//     if (person1Age > person2Age) {
//         return 'Osoba pierwsza jest starsza od drugiej';
//     }
//     if (person2Age > person1Age) {
//         return 'Osoba druga jest starsza od pierwszej';
//     }
//     return 'Osoby maja tyle samo lat';
// }

// whoIsOlder(age1, age2);

// Przepisz walidacje w zadaniu domowym z DOM w taki sposob, aby uzywac slowa kluczowego return i sposobu early return
// const handleSubmit = (event) => {
//     event.preventDefault();

//     if (authorInput.value.length === 0 || messageInput.value.length === 0) {
//         alert('Wypelnij pola formularza');
//         return;
//     }

//     list.innerHTML += `
//         <li class="messages-item"> ${messageInput.value} - <strong>${authorInput.value} </strong></li>
//       `
//     authorInput.value = '';
//     messageInput.value = '';
// }


// podstawy programowania funkcyjnego
// JS nalezy do jezykow ze stylem programowania funkcyjnego

// petla forof
const numbers = [10, 20, 30];
for (let number of numbers) {
    console.log(number);
}

// forEach - z . uzyciem funkcji anonimowej
// ta funkcja moze w materialach byc nazwana callback
// number jest to ten element tablicy, przez ktory aktualnie przechodzi petla
numbers.forEach((number) => {
    console.log(number);
});

// petla forEach w srodku wyglada tak samo jak petla for of
let sum = 0;
numbers.forEach((number) => {
    sum += number;
})
console.log(sum);

// zoptymalizowana funkcja strzalkowa forEach
numbers.forEach(number => sum + number);
console.log(sum);

// funkcja strzalkowa moze byc zoptymaliziowana (zapisana krocej)
const roundNumber = (number) => {
    return Math.round(number);
}
console.log(roundNumber(10.55));

// jesli f. strzalkowa przyjmuje tylko jeden parametr to mozna usunac nawiasy przy parametrze
const roundNumber2 = number => {
    return Math.round(number);
}
console.log(roundNumber2(10.2));

// jesli f. strzalkowa wykonuje tylko jedna rzecz, to mozna usunac klamry i slowo kluczowe return
const roundNumber3 = number => Math.round(number);
console.log(roundNumber3(8.17));

// ------------- Formaty zapisu danych ----------------
// 1. JSON - najpopularniejszy (80%)
// 2. XML
// 3. CSV - format ala excel

// Formaty tekstowe
// MD - Markdown (format zapisu tekstu)
// YAML - glownie do pisania ustawien

// przy zamisie struktury danych musimy pamietac zaeby kazdy obiekt zawieral pole id, aby moc na danych wykonywac operacje
// CRUD - Create, Read, Update, Delete

// Obsluga JSONa

const messages = [
    {
        id: 1,
        author: 'Zygmunt',
        message: 'Kurs ALX jest ok'
    },
    {
        id: 2,
        author: 'Basia',
        message: 'Chce wiecej JS!'
    }
]

// zapis do JSON
// JSON.parse() - zamiana JSON na JS
//JSON.stringify()- zamiana JS na JSON

console.log(messages);
const messageJSON = JSON.stringify(messages);
// console.log(JSON.stringify(messages));
console.log(messageJSON);

// roznice miedzy JS a JSON
// - JSON zapisuje cala tablice jako string
// w JSON wszystkie kluche obiektow sa stringami
// w JSON ostatnie wlasciwosci obiektow i tablic, nie maja przecinkow

const messageJSONtoJS = JSON.parse(messageJSON);
console.log(messageJSONtoJS);

// Wbudowane schowki w przegladarke
// przegladarka ma 3 schowki
// window.localStorage - pamiec podreczna przegladarki; zapis i odczyt robimy recznie, gdyz dane sie nie "odswieza" - oparty na JSON
// window.sessionsStorage - pamiec sesji przegladarki; dane beda utracone w chwili wylaczenia przegladarki - oparty na JSON
//document.cookie - ciasteczka, czyli drobne dane, ktore sa przechowywane na stronie - oparty na string

// roznica pomiedzy localStorage/sessionStorage i cookies jest taka, iz do cookies ma dostep serwer back-endowy i na tej podstawie moze zaladowac/nie zaladowac dane

// localStorage
// jesli przed nazwa funkcji/obiektu wbudowanego nie mamay zadnego slowa, to oznacza, ze funkcja/obiekt jest dostepna w obiekcie window
// localStorage.getItem('messages'); //pobieranie rzeczy z LS
// localStorage.setItem('messages','wartosc'); // wysylanie rzeczy do LS
// localStorage.removeItem('messages');//usuwanie rzeczy z LS

localStorage.setItem('text', 'hello Marek');//chcemy zapisac zmienna text o wartosci hello Marek
// odczyt -> zakladka Storage w narzedziach przegladarki

const dataFromLS = localStorage.getItem('text');
console.log(dataFromLS);
localStorage.removeItem('text');

// zapis tablicy obiektow do localStorage
// trzeba przeksztalcic na JSON
localStorage.setItem('messages', JSON.stringify(messages));

// odczyt tablicy obiektow z LS
const items = localStorage.getItem('messages');
// na start items to zwykly string, trzeba go troche przeksztalcic
let itemsParsed = JSON.parse(items);
if (itemsParsed === null) {
    itemsParsed = [];
}
console.log(itemsParsed);

localStorage.removeItem('messages');

// jak tablice obiektow zaladowac na strone?
const body = document.querySelector('body');
// z racji tego iz itemsParsed jest to tablica obiektow, moge na niej wykonac forEach i kazdy element zaladowac na strone
itemsParsed.forEach(element => {
    body.innerHTML += `
    <p>${element.message} - ${element.author}</p>
    `
});