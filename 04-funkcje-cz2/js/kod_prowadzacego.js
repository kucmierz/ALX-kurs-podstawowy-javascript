// 2. Napisz funkcje multiply, ktora przyjmie dwie liczby a nastepnie wyswietli w konsoli wynik mnozenia

function multiply(number1, number2) {
  // console.log(`Hej ${number1} i ${number2}`);
  return number1 * number2;
}

const result1 = multiply(5, 10)
console.log(result1)
// Mozna wywolac nasza funkcje bezposrednio w console.log
console.log(multiply(6, 2))


// 3. Napisz funkcje o nazwie whoIsTaller, ktorej zadanie jest nastepujace:
// - funkcja ma pobrac wzrost pierwszego uzytkownika
// - funkcja ma pobrac wzrost drugiego uzytkownika
// - funkcja ma wyswietlic informacje, kto jest wyzszy


// const height1 = parseInt(prompt('Podaj wzrost (1 czlowiek)'));
// const height2 = parseInt(prompt('Podaj wzrost (2 czlowiek)'));


// function whoIsTaller(person1Height, person2Height) {
//   if (person1Height > person2Height) {
//     return 'Pierwsza osoba jest wyzsza od drugiej'
//   } else if (person1Height === person2Height) {
//     return 'Ludzie sa tego samego wzrostu';
//   } else {
//     return 'Druga osoba jest wyzsza od pierwszej'
//   }
// }

// console.log(whoIsTaller(height1, height2));

// 4. Napisz funkcje o nazwie findTheBestMovie, ktora przyjmie jako parametr liste Twoich ulubionych filmow i nastepnie zwroci napis "Moim ulubionym filmem jest Ojciec Chrzestny z ocena 10".

const movies2 = [
  {
    title: 'Ojciec Chrzestny',
    rate: 10,
    year: 1960
  },
  {
    title: 'Rozowa Pantera',
    rate: 9,
    year: 1980
  },
  {
    title: 'Atak Krwiozerczych Donutow',
    rate: 2,
    year: 2016
  }
]


function findTheBestMovie(collection) {
  let theBestMovie = collection[0];

  for (let movie of collection) {
    // Jesli film przez ktory aktualnie przechodze, ma wieksza ocene od najlepszego filmu dotychczas, to zamien wartosc zmiennej
    if (movie.rate > theBestMovie.rate) {
      theBestMovie = movie;
    }
  }

  return `Moim ulubionym filmem jest ${theBestMovie.title} z ocena ${theBestMovie.rate}`
}

console.log(findTheBestMovie(movies2));



//  --- 2 wlasciwosc return: early return ---


const addTwoNumbers = (a, b) => {
  xw
  // w JS jest specjalna funkcja, ktora sprawdza typ zmiennych - nazywa sie typeof
  // console.log(typeof a);
  // console.log(typeof b);

  // return dziala tak, ze w momencie w ktorym wystapi, wychodzi z funkcji
  // ten pattern nazywa sie early return
  if (typeof a !== 'number' || typeof b !== 'number') {
    return;
  }

  return a + b;
}

console.log(addTwoNumbers(10, 'dsajndasas'));



// Napisz funkcje whoIsOlder, ktora przyjmie wzrost 2 uzytkownikow, a nastepnie zwroci informacje kto jest starszy

// const age1 = parseInt(prompt('Podaj ile masz lat? (czlowiek1)'))
// const age2 = parseInt(prompt('Podaj ile masz lat? (czlowiek2)'))


// function whoIsOlder(person1Age, person2Age) {
//   if(person1Age > person2Age) {
//     return 'Osoba pierwsza jest starsza od drugiej'
//   }

//   if(person2Age < person1Age) {
//     return 'Osoba druga jest starsza od pierwszej'
//   }

//   return 'Osoby maja tyle samo lat'
// }

// whoIsOlder(age1, age2)

// Przepisz walidacje w zadaniu domowym z DOM w taki sposob, aby uzywac slowa kluczowego return i sposobu early return

// ------------ Formaty zapisu danych ------------



// Przy zapisie struktur danych musimy pamietac zeby kazdy obiekt zawieral pole ID, ktore jest unikalne. Wynika to z tego, ze na danych powinnismy moc wykonywac akcje CRUD

// CRUD

// Create
// Read
// Update
// Delete



// 1. JSON - najpopularniejszym (80%)
// 2. XML
// 3. CSV - format ala excel


// Formaty tekstowe

// MD - Markdown (format zapisu tekstu)

// # Tytul - tytul
// ## Podtytul - podtytul

// dsadasdadas
// - dsadsa

// YAML - Glownie ustawienia


// Obsluga JSONa

const messages = [
  {
    id: 1,
    author: 'Damian',
    message: "Kurs ALX jest fajny i duzo sie ucze",
  },
  {
    id: 2,
    author: 'Michał',
    message: "Ale bym sie pouczyl wiecej JS",
  },
]

// Roznice pomiedzy JS a JSON

// - JSON zapisuje cala tablice jako string
// - w JSON wszystkie klucze obiektow sa stringami
// - w JSON ostatnie wlasciwosci obiektow i tablic, nie maja przecinkow

// Operacje na JSON

// JSON.parse() - Zamiana JSON na JS
// JSON.stringify() - zamiana JS na JSON

// const messagesJSON = JSON.stringify(messages);
// console.log(messagesJSON);
// console.log(JSON.parse(messagesJSON));


// Wbudowane schowki w przegladarke

// Przeglarka ma 3 schowki

// window.localStorage - pamiec podreczna przegladarki (zapis i odczyt musimy robic recznie, bo inaczej te dane sie nie odswieza). Oparty na JSON

// window.sessionStorage - pamiec sesji przegladarki (dane beda utracone w momencie jak wylacze przegladarke). Oparty na JSON

// document.cookie - ciasteczka, czyli drobne dane, ktore sa przechowywane na stronie. Oparty na string

// Roznica pomiedzy localStorage/sessionStorage i cookies jest taka, ze do cookies ma dostep serwer back-endowy i na tej podstawie moze zaladowac/nie zaladowac dane


// localStorage

// jesli przed nazwa funkcji/obiektu wbudowanego nie mamy zadnego slowa, to oznacza, ze funkcja/obiekt jest dostepna w obiekcie window

// localStorage.getItem('messages'); //pobieranie rzeczy z LS
// localStorage.setItem('messages', 'wartosc') // wysylanie rzeczy do LS
// localStorage.removeItem('messages'); // usuwanie rzeczy z LS

// localStorage.setItem('text', 'hello'); // chcemy zapisac zmienna text o wartosci hello


// localStorage.getItem('text'); //zwraca mi wartosc tego schowka

// const dataFromLS = localStorage.getItem('text');

// console.log(dataFromLS)

// localStorage.removeItem('text');

// console.log(localStorage.getItem('text')) //jesli w localStarge nie ma takiej wartosci, to metoda getItem zwraca null



const messages2 = [
  {
    id: 1,
    author: 'Damian',
    message: "Kurs ALX jest fajny i duzo sie ucze",
  },
  {
    id: 2,
    author: 'Michał',
    message: "Ale bym sie pouczyl wiecej JS",
  },
]

// Zapis tablicy obiektow do localStorage

// localStorage.setItem('messages', JSON.stringify(messages2))

// Odczyt tablicy obiektow z localStorage

let items = JSON.parse(localStorage.getItem('messages'));

if (items === null) {
  items = []
}

console.log(items);

// Jak tablice obiektow zaladowac na strone?

const body = document.querySelector('body');

// Z racji tego ze items jest to tablica (bo to tablica obiektow), moge na niech wykonac petle forEach i kazdy element zaladowac na strone

// Uncaught TypeError: Cannot read properties
// of null (reading 'forEach')

items.forEach((element) => {
  body.innerHTML += `
    <p> ${element.message} - ${element.author}</p>
  `
})

// ------------------ Zadania dla was --------------------


// 1. Stworz tablice obiektow o nazwie people. Kazdy obiekt niech zawiera pole name, age oraz oczywiscie pole id :)
// 2. Zapisz tablice obiektow do localStorage pod kluczem people
// 3. Po zapisaniu tablicy obiektow, zakomentuj linijke odpowiedzialna za zapisywanie do LS
// 4. Zrob obsluge odczytu z LS, a nastepnie wyswietl dane na stronie przy uzyciu funkcji forEach
// 5. Za pomoca przegladarki i tabu Application, usun dane z LS i sprawdz czy aplikacja nie wywala bledow w konsoli

const people = [
  {
    id: 1,
    name: 'Damian',
    age: 50
  },
  {
    id: 2,
    name: 'Pawel',
    age: 20
  }
];

// localStorage.setItem('people', JSON.stringify(people));

let peopleFromLS = JSON.parse(localStorage.getItem('people'));

// * W JS istnieje cos takiego jak rzutowanie zmiennych
// 0, '', null, undefined -> false
// ' d', [], {} -> true

// if(!peopleFromLS) {
//   peopleFromLS = [];
// }

if (peopleFromLS === null) {
  peopleFromLS = [];
}

// * ES9 - nullish operator ??

// const peopleFromLS = JSON.parse(localStorage.getItem('people')) ?? [];

peopleFromLS.forEach(person => {
  body.innerHTML += `
    <p> ${person.name} </p<
  `
})
