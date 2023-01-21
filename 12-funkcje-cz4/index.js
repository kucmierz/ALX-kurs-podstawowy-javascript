const comments = [
    {
        author: 'Damian',
        accuracy: 8,
        text: 'Kurs ALX jest fajny'
    },
    {
        author: 'Tomek',
        accuracy: 5,
        text: 'Duzo sie nauczylem ale potrzebuje pocwiczyc'
    },
    {
        author: 'Paweł',
        accuracy: 1,
        text: 'Za mało ciastek'
    }
]

// Napisz funkcje getCommentsByAccuracy, ktory przyjmie 2 argumenty - tablice oraz liczbe. Funkcja ma zwrocic tablice obiektow z elementami, ktorych accuracy jest powyzej tej liczby

// getCommentsByAccuracy(comments, 2) => [{Damian}, {Tomek}]
// getCommentsByAccuracy(comments, 10) => []

const getCommentsByAccuracy = (array, accuracyNumber) => {
    const results = [];
    array.forEach(element => {
        if (element.accuracy >= accuracyNumber) {
            results.push(element.author);
        }
    });
    return results;
}


// Programowanie funkcyjne
// forEach, map, filter, find, sort, reduce*


// funkcja filter - nie rozni sie od funkcji forEach
// jest to funkcja tablicowa, ktora jako parametr przyjmuje jeden obiekt
// przez ktory przechodzi. Dziala ona na zasadzie petli.
// Sluzy do filtrowania wynikow w zaleznosci od podanego przez nas kryterium
// Jesli warunek w srodku jest true, to przechodzi do tablicy pomocniczej
// const filteredArray = array.filter(element => {return elemnt.rate > 8})
const getCommentsByAccuracyWithFilter = (array, number) => {
    // const filteredComments = array.filter(element => {
    //   return element.accuracy >= number
    // })

    // *. Skrocona forma zapisu

    const filteredComments = array
        .filter(element => element.accuracy >= number)


    // const filteredComments = [];

    // array.forEach(element => {
    //   if(element.accuracy >= number) {
    //     filteredComments.push(element)
    //   }
    // })

    return filteredComments
}

// console.log(getCommentsByAccuracyWithFilter(comments, 2))


// Napisz funkcje searchByText, ktora przyjmie 2 argumenty. Pierwszy argument to tablica obiektow, a drugi argument to string zawierajacy jakis tekst. Funkcja ma zwracac te obiekty, ktore zawieraja slowo podane w drugim argumencie

// searchByText(comments, 'ALX') -> [{Damian}]
// searchByText(comments, 'j') -> [{Damian}, {Tomek}]

const searchByText = (array, searchingPhrase) => {
    // const result = array.filter(element => {
    //     return element.text.toLowerCase().includes(searchingPhrase.toLowerCase());
    // });
    const result = array.filter(element => element.text.toLowerCase().includes(searchingPhrase.toLowerCase()));

    return result;
}
// console.log(searchByText(comments, 'ALX'));
// console.log(searchByText(comments, 'j'));

// Funkcja find
// do znalezienia wystapienia Pierwszego elem spelniajacego warunki
// zazywyczaj jest uzywana przy szukaniu elementow o danym ID. zwraca znaleziony obiekt, lub null/underfined gdy nie znajdzie

const rates = [
    {
        id: 1,
        rate: 8,
        comment: 'Dobra knajpa'
    },
    {
        id: 2,
        rate: 8,
        comment: 'Fajnie to bylo wczoraj'
    }
]

//   const foundElement = rates.find(element => element.id === 20);
//   console.log(foundElement);

// Napisz funckje findById, ktora przyjmie 2 parametry - tablice obiektow oraz id po ktorym ma szukac. Funkcja ma zwrocic komentarz przypisany do tego id. Jesli funkcja nic nie znajdzie, zwroc napis "nie znaleziono".

// findById(rates, 2) => 'Fajnie to bylo wczoraj'
// findById(rates, 20) => 'Nie znaleziono'

const findById = (array, searchingId) => {
    const searchingResult = array.find(elem => elem.id === searchingId);
    let info = 'Nie znaleziono';
    if (searchingResult) {
        info = searchingResult.comment;
    }
    // return searchingResult ? searchingResult.comment : 'Nie znaleziono';
    return info;
}

// console.log(findById(rates, 20));

// 3. map

// Funkcja map wyglada tak samo jak funckja forEach, filter i find. Celem funkcji map, jest rozbrajanie tablic (czyli np mamy tablice obiektow a chcemy miec tablice imion). Funkcja map nie sluzy do filtrowania. To co zostanie zwrocone w funkcji map, przejdzie do nowej tablicy

// map - rozbrajanie tablic
// np mamy tablice obiektow, a chcemy tablice imion
// nie sluzy do filtrowania. to co zostanie zwrocone w funkcji map, przejdzie do nowej tablicy

const messages = [
    {
        id: 1,
        message: 'Hello World'
    },
    {
        id: 2,
        message: 'Jest fajnie'
    }
]
const newMessages = messages.map(item => item.message)
// console.log(newMessages);

const rates2 = [
    {
        id: 1,
        rate: 8,
        comment: 'Dobra knajpa'
    },
    {
        id: 2,
        rate: 3,
        comment: 'Fajnie to bylo wczoraj'
    }
]

// Napisz funkcje getAverageRate, ktora przyjmie jako paramtr tablice obiektow i zwroci srednia ocene.

// getAverageRate(rates2) => 5.5

// 1. Za pomoca funkcji map, przerob tablice obiektow na tablice ocen.
// 2. Majac tablice ocen, wylicz srednia za pomoca funkcji forEach
// 3. zwroc srednia ocene

const getAverageRate = (array) => {
    const arrayRates = array.map(element => element.rate);
    let sum = 0;
    arrayRates.forEach(item => sum += item);
    const arrayAverage = sum / arrayRates.length;
    return arrayAverage.toFixed(2);
}
// console.log(`Srednia: ${getAverageRate(rates2)}`);