const getSum = (numberArray) => {
    let arraySum = 0;
    numberArray.forEach(element => arraySum += element);
    return arraySum;
}

const x = [15, 1, 474, 5, 0]
const y = [];
const z = [5, 10, 15];

// console.log(getSum(x));
// console.log(getSum(y));
// console.log(getSum(z));

// funkcja reduce
// jest to funkcja uzywana przy przerabianiu obiektow na tablice
// i tablic na obiekty
// przy prostszych przypadkach, moze byc uzywana np. do liczenia sumy

const getSumWithReduce = (array) => {
    const sum = array.reduce((accumulator, item) => {
        console.log(`Obecna wartosc akumulatora: ${accumulator}`);
        return accumulator += item;
    }, 0);
    return sum;
}

// console.log(getSumWithReduce(z));
// Napisz funkcje calculateLetters, ktora przyjmie tablice imion i zwroci ile jest lacznie liter w tych imionach

// calculateLetters(['Damian', 'Pawel']) => 11
// calculateLetters(['Damian', 'Pawel', 'Ania']) => 15

const imiona = ['Damian', 'Marek', 'Ania'];

const calculateLetters = (array) => {
    const letters = array.reduce((accumulator, arrayName) => {
        return accumulator += arrayName.length;
    }, 0);
    return letters;
}

// console.log(calculateLetters(['Damian', 'Pawel', 'Ania']));

// sort - sortuje elementy wg podanych kryteriow
// przyjmuje funkcje sprawdzajaca
// w niej (sprawdzajacej) powinnismy sprawdzic, czy jeden element
// jest wiekszy od drugiego. Jesli prev jest wiekszy od next, to okreslamy, czy
// element powinien isc na dol, czy na gore.
const grades = [
    {
        name: 'Damian',
        grade: 5
    },
    {
        name: 'Agata',
        grade: 4
    },
    {
        name: 'Pawel',
        grade: 2
    }
];
// funkcja sort jest specyficzna funkcja, ktora przyjmuje funkcje sprawdzajaca. W funkcji sprawdzajacej powinnismy sprawdzic, czy jeden element jest wiekszy od drugiego. Jesli prev jest wiekszy niz next, to okreslamy czy element powinien isc na dol czy na gore

//  x ? -1 : 1 -> od najwiekszej do najmniejszej
// x ? 1 : -1 -> od najmniejszej do najwiekszej

const sortedGrades = grades.sort((prev, next) => {
    // przyjmuje element poprzedni i nastepny
    // dziala na zasadzie sortowania babelkowego
    return prev.grade > next.grade ? 1 : -1;
});
// console.log(sortedGrades);


// Majac tablice obiektow comments2, znajdz ktory komentarz jest nabardziej adekwantny (accuracy jest najwyzsze). Wykorzystaj funkcje sort

const comments2 = [
    {
        text: 'ALX jest fajne',
        accuracy: 8
    },
    {
        text: 'Potrzeuje kawy',
        accuracy: 10
    },
    {
        text: 'Ale dzisiaj gorąco',
        accuracy: 2
    },
];
const sortedComments = comments2.sort((prev, next) => {
    return prev.accuracy > next.accuracy ? -1 : 1;
});

// console.log(sortedComments);
const theBiggestAccuracy = sortedComments[0];
// console.log(theBiggestAccuracy);


// Napisz funkcje findAuthorByComment, ktora przyjmuje zagniezdzona tablice obiektow i zwraca name authora, ktory napisal dany komentarz

const authors = [
    {
        id: 1,
        name: 'Damian',
        comments: [
            {
                id: 1,
                comment: 'Fajne dzisiaj zajecia'
            },
            {
                id: 2,
                comment: 'Potrzebuje kawy'
            }
        ]
    },
    {
        id: 2,
        name: 'Paweł',
        comments: [
            {
                id: 10,
                comment: 'Nie dziala mi monitor'
            },
            {
                id: 20,
                comment: 'Potrzebuje wody'
            }
        ]
    }
]

// findAuthorByComment(authors, 20) -> 'Paweł'
// findAuthorByComment(authors, 1) -> 'Damian'
// findAuthorByComment(authors, 1231) -> null

const findAuthorByComment = (array, commentId) => {
    const results = [];
    array.forEach(post => {
        if (post.comments.find(c => c.id === commentId)) {
            // console.log(post.name);
            results.push(post.name);
        }
    });
    return results
}

const findAuthorByComment2 = (array, commentId) => {
    return array.
        find(author => author.comments
            .find(comment => comment.id === commentId)
        )?.name ?? null
}

console.log(findAuthorByComment2(authors, 20));