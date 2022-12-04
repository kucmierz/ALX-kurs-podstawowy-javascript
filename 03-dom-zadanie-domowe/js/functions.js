// Zadania do zrobienia w domu z tematu funkcji

// 1. Stworz tablice obiektów, zawierającą Twoje ulubione filmy. Kazdy film niech posiada takie wlasciwosci jak tytul, rok produkcji i ocena (number od 1 do 10). Nastepnie napisz program (bez uzycia funkcji), ktory wypisze w konsoli, ktore filmy maja ocene powyzej 8.

// Przyklad w konsoli
// Film Ojciec Chrzestny ma wg mnie ocene 10
// Film Rozowa Pantera ma wg mnie ocene 9
// Dla filmu z ocena 2, nie wyswietl nic

const myFilms = [
    {
        title: 'Matrix',
        rank: 10
    },
    {
        title: 'The Lord of the Rings',
        rank: 8.5
    },
    {
        title: 'Top Gun',
        rank: 8.1
    },
    {
        title: '365',
        rank: 1.3
    }
]

for (let film of myFilms) {
    if (film.rank > 8) {
        console.log(`Film ${film.title} ma wg mnie ocene ${film.rank}`);
    } else {
        console.log(`Jest taki film jak ${film.title}, ale lepiej nic wiecej nie mowic.`);
    }
}

// 2. Napisz funkcje multiply, ktora przyjmie dwie liczby a nastepnie wyswietli w konsoli wynik mnozenia

const multiply = () => {
    const nbr_1 = parseFloat(prompt('Wprowadz pierwsza liczbe'));
    const nbr_2 = parseFloat(prompt('Wprowadz druga liczbe'));

    console.log(`${nbr_1} * ${nbr_2} = ${nbr_1 * nbr_2}`);
}

multiply();

//poprawna funkcja mnozenia przedstawiona na zajeciach
function multiply2(number1, number2) {
    console.log(`${number1} * ${number2} = ${number1 * number2}`);
}


// 3. Napisz funkcje o nazwie whoIsTaller, ktorej zadanie jest nastepujace:
// - funkcja ma pobrac wzrost pierwszego uzytkownika
// - funkcja ma pobrac wzrost drugiego uzytkownika
// - funkcja ma wyswietlic informacje, kto jest wyzszy

const whoIsTaller = () => {
    const height_1 = parseFloat(prompt('Wzrost pierwszej osoby'));
    const height_2 = parseFloat(prompt('Wzrost drugiej osoby'));

    if (height_1 > height_2) {
        console.log('Osoba pierwsza jest wyzsza');
    } else if (height_1 < height_2) {
        console.log('Osoba druga jest wyzsza');
    } else {
        console.log('Osoby maja ten sam wzrost');
    }
}

whoIsTaller();

//poprawna funkcja z parametrami przedstawiona na zajeciach
const whoIsTaller2 = (height_1, height_2) => {
    if (height_1 > height_2) {
        console.log('Osoba pierwsza jest wyzsza');
    } else if (height_1 < height_2) {
        console.log('Osoba druga jest wyzsza');
    } else {
        console.log('Osoby maja ten sam wzrost');
    }
}

// 4. Napisz funkcje o nazwie findTheBestMovie, ktora przyjmie jako parametr liste Twoich ulubionych filmow i nastepnie zwroci napis "Moim ulubionym filmem jest Ojciec Chrzestny z ocena 10".

const findTheBestMovie = (movies) => {
    const bestMovies = [];
    let bestRank = movies[0].rank;

    for (let movie of movies) {
        if (movie.rank >= bestRank) {
            bestMovies.push(movie.title);
            bestRank = movie.rank;
        }
    }

    if (bestMovies.length > 1) {
        console.log(`Moje ulubione filmy to: ${bestMovies.join(', ')}`);
        console.log(`Wszystkie one maja ocene ${bestRank}`);
    } else if (bestMovies.length === 1) {
        console.log(`Moim ulubionym filmem jest ${bestMovies} z ocena ${bestRank}`);
    } else {
        console.log('Nie ma zadnej listy moich ulubionych filmow.');
    }
}

findTheBestMovie(myFilms);