// // Zadania do zrobienia w domu z tematu funkcji

// const names = ['Damian', 'Pawel', 'Marcin'];

// // console.log(names.join(' i ')) => Damian i Pawel i Marcin

// console.log(names[names.length - 1])

// for(let i = 0; i < 10; i++) {
//   console.log(`Wykonam sie ${i + 1} razy`)
// }

// for(let name of names) {
//   console.log(name);
// }

// const shoe = {
//   size: 42,
//   brand: 'Nike'
// }

// shoe.used = false;

// if(shoe.size > 42) {
//   console.log('nie mamy takich butow')
// } else {
//   console.log('mamy taki but')
// }

// prompt - pobieranie wartosci od uzytkownika
// alert - wyswietlanie tresci uzytkownikowi


// const people = [
//   {
//     name: "Damian",
//     height: 180
//   },
//   {
//     name: "Agnieszka",
//     height: 165
//   },
//   {
//     name: "Paweł",
//     height: 170
//   }
// ]

// let sum = 0; // 505

// for (let person of people) {
//   if(person.heigth > 170) {
//     sum += person.height
//   }
//   // sum = sum + person.height
// }

// console.log(`Sredni wzrost ludzi to ${sum / people.length}`)

// 1. Stworz tablice obiektów, zawierającą Twoje ulubione filmy. Kazdy film niech posiada takie wlasciwosci jak tytul, rok produkcji i ocena (number od 1 do 10). Nastepnie napisz program (bez uzycia funkcji), ktory wypisze w konsoli, ktore filmy maja ocene powyzej 8.

// Przyklad w konsoli
// Film Ojciec Chrzestny ma wg mnie ocene 10
// Film Rozowa Pantera ma wg mnie ocene 9
// Dla filmu z ocena 2, nie wyswietl nic

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
  
  for (let movie of movies) {
    if(movie.rate > 2) {
      console.log(`Film ${movie.title} ma wg mnie ocene ${movie.rate}`)
    }
  }
  
  
  // 2. Napisz funkcje multiply, ktora przyjmie dwie liczby a nastepnie wyswietli w konsoli wynik mnozenia
  
  function multiply(number1, number2) {
    // console.log(`Hej ${number1} i ${number2}`);
    console.log(number1 * number2);
  }
  
  multiply(5, 10)
  multiply(6, 2)
  
  
  
  
  // 3. Napisz funkcje o nazwie whoIsTaller, ktorej zadanie jest nastepujace:
  // - funkcja ma pobrac wzrost pierwszego uzytkownika
  // - funkcja ma pobrac wzrost drugiego uzytkownika
  // - funkcja ma wyswietlic informacje, kto jest wyzszy
  
  
  const height1 = parseInt(prompt('Podaj wzrost (1 czlowiek)'));
  const height2 = parseInt(prompt('Podaj wzrost (2 czlowiek)'));
  
function whoIsTaller(person1Height, person2Height) {
  if (person1Height > person2Height) {
    console.log('Pierwsza osoba jest wyzsza od drugiej')
  } else if (person1Height === person2Height) {
    console.log('Ludzie sa tego samego wzrostu');
  } else {
    console.log('Druga osoba jest wyzsza od pierwszej')
  }
}

whoIsTaller(height1, height2);

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
    if(movie.rate > theBestMovie.rate) {
      theBestMovie = movie;
    }
  }

  console.log(`Moim ulubionym filmem jest ${theBestMovie.title} z ocena ${theBestMovie.rate}`)
}

findTheBestMovie(movies2);