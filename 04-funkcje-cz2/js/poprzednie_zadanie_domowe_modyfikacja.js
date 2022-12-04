// Slowo kluczowe return

const sumTwoNumbers = (a, b) => {
    // console.log(a + b);
    // slowo kluczowe return zwraca wartosc funkcji do miejsca jej wywolania
    return a + b;
}

const checkNumber = (number) => {
    // wzor na parzystosc

    // return nie moze byc przed instrukcjami wbudowanymi (for, if, itp.)

    if (number % 2 === 0) {
        return 'Liczba jest parzysta'
    } else {
        return 'liczba jest nieparzysta'
    }
}

const result = sumTwoNumbers(10, 20);
const result2 = checkNumber(result);
console.log(result2);

// ------------------------------------

// Zadanie dla was
// Wez cale zadanie domowe i przepisz je na returny

// ------------------------------------


// 2. Napisz funkcje multiply, ktora przyjmie dwie liczby a nastepnie wyswietli w konsoli wynik mnozenia

function multiply(number1, number2) {
    // console.log(`Hej ${number1} i ${number2}`);
    return number1 * number2;
}

console.log(multiply(5, 10));
console.log(multiply(6, 2));


// 3. Napisz funkcje o nazwie whoIsTaller, ktorej zadanie jest nastepujace:
// - funkcja ma pobrac wzrost pierwszego uzytkownika
// - funkcja ma pobrac wzrost drugiego uzytkownika
// - funkcja ma wyswietlic informacje, kto jest wyzszy


const height1 = parseInt(prompt('Podaj wzrost (1 czlowiek)'));
const height2 = parseInt(prompt('Podaj wzrost (2 czlowiek)'));


function whoIsTaller(person1Height, person2Height) {
    if (person1Height > person2Height) {
        return 'Pierwsza osoba jest wyzsza od drugiej';
    } else if (person1Height === person2Height) {
        return 'Ludzie sa tego samego wzrostu';
    } else {
        return 'Druga osoba jest wyzsza od pierwszej';
    }
}

console.log(whoIsTaller(height1, height2));

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

    return `Moim ulubionym filmem jest ${theBestMovie.title} z ocena ${theBestMovie.rate}`;
}

console.log(findTheBestMovie(movies2));