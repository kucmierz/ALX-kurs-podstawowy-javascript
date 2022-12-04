// -------------   forEach cwiczenia -------------

// 1. Wez zadanie 1 z zadania domowego i przerob go na forEach

const movies = [
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

movies.forEach(movie => {
    if (movie.rate > 2) {
        console.log(`Film ${movie.title} ma wg mnie ocene ${movie.rate}`)
    }
});



// 2. Majac tablice wzrostow, policz srednia wzrostu

const pplHeights = [180, 160, 170];
let pplHeightsSum = 0;
pplHeights.forEach(pplHeight => pplHeightsSum += pplHeight);
const pplHeightsAvg = pplHeightsSum / pplHeights.length;
console.log(`srednia wzrostu wynosi ${pplHeightsAvg}`);


// 3. Przerobc zadanie 4 z zadania domowego na forEach
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

    collection.forEach(movie => {
        if (movie.rate > theBestMovie.rate) {
            theBestMovie = movie;
        }
    });

    return `Moim ulubionym filmem jest ${theBestMovie.title} z ocena ${theBestMovie.rate}`;
}

console.log(findTheBestMovie(movies2));


// ------------------ Zadania dla was --------------------


// 1. Stworz tablice obiektow o nazwie people. Kazdy obiekt niech zawiera pole name, age oraz oczywiscie pole id :)
people = [
    {
        id: 1,
        name: 'Zbych',
        age: 43
    },
    {
        id: 2,
        name: 'Hanka',
        age: 34
    },
    {
        id: 3,
        name: 'Cypisek',
        age: 12
    },
    {
        id: 4,
        name: 'Sofia',
        age: 21
    }
]

// 2. Zapisz tablice obiektow do localStorage pod kluczem people
const peopleJSON = JSON.stringify(people);
// localStorage.setItem('people', peopleJSON);

// 3. Po zapisaniu tablicy obiektow, zakomentuj linijke odpowiedzialna za zapisywanie do LS

// 4. Zrob obsluge odczytu z LS, a nastepnie wyswietl dane na stronie przy uzyciu funkcji forEach
addToBody = item => {
    const bodyElement = document.querySelector('body');
    bodyElement.innerHTML += `<p>id:${item.id} name: ${item.name} age: ${item.age}</p>`;
}

let peopleLS = JSON.parse(localStorage.getItem('people'));
// peopleLS.forEach(people => addToBody(people));

// 5. Za pomoca przegladarki i tabu Application, usun dane z LS i sprawdz czy aplikacja nie wywala bledow w konsoli
localStorage.removeItem('people');
if (peopleLS === null) {
    peopleLS = [];
}
peopleLS.forEach(people => addToBody(people));

//peopleLS === null jest rownowazne z !peopleLS
// w JS nie istnieje rzutowanie
// 0,'',null,underfined -> false
//' d', {}, [] -> true
// ES9 - nullish operator ??
// const x = wartosc1 ?? wartosc2gdyJedynkaBedzieNull;

//ecma script updates


// Zadanie dla was

// 1. Przekopiuj folder 03-dom-zadanie-domowe i stworz folder 06-dom-messages-localstorage
// 2. Zrob obsluge odczytywania i zapisywania do localStorage
// 3. Zrob obsluge usuwania z localStorage (po wcisnieciu guzika removeTodos uruchom funkcje localStorage.removeItem('X'))