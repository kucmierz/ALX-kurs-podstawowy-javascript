// funkcja do zapisu nowego rekordu/wiersza tabeli
const addNewRow = (tableSelector, rowValues) => {
    tableSelector.innerHTML += `<tr><td>${rowValues}</td></tr>`;
    rowValues.forEach(colElement => {
        tableSelector.innerHTML += `<td>${colElement}</td>`;
    });
}

// przechwycenie formularza - dla obslugi przycisku
const book_form = document.querySelector('#book_form');

// przechwycenie kolejnych inputow - wartosc wprowadzona przez uzytkownika
const book_title = document.querySelector('#book_title');
const book_year = document.querySelector('#book_year');
const book_author = document.querySelector('#book_author');

// tabela przedstawiajaca ksiazki
const book_table = document.querySelector('#book_table');

// tablica wszystkich rekordow
let book_list = [];
// sprawdzenie, czy LS zawiera juz jakies rekordy
const already_saved_book_list = JSON.parse(localStorage.getItem('books'));
// // sprawdzenie czy cos bylo zapisane
if (already_saved_book_list) {
    book_list = already_saved_book_list;
    book_list.forEach(book => {
        console.log(book);
        book_table.innerHTML += `<tr>
        <td>${book.book_title}</td>
        <td>${book.book_year}</td>
        <td>${book.book_author}</td>
        </tr>`;
    })
}

const handleSubmit = (event) => {
    event.preventDefault();

    // utworzenie nowej wartosci/pozycji
    const new_position = {
        id: Date.now(),
        book_title: book_title.value,
        book_year: book_year.value,
        book_author: book_author.value,
    }
    // dodanie nowego rekordu do listy wszystkich dotychczasowych pozycji
    book_list.push(new_position);

    // zapis wszystkich rekordow do LS
    localStorage.setItem('books', JSON.stringify(book_list));

    // aktualizacja/dodanie nowego wiersza z ksiazka do tabeli na stronie
    // zrobic to jako oddzielna funkcje
    book_table.innerHTML += `<tr>
                            <td>${book_title.value}</td>
                            <td>${book_year.value}</td>
                            <td>${book_author.value}</td>
                            </tr>`;

    // wyczyszczenie pola wpisu
    book_title.value = '';
    book_year.value = '';
    book_author.value = '';
}
// dodanie zdarzenia obslugi formularza
book_form.addEventListener('submit', handleSubmit);