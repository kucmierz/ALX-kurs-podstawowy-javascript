const trainRoutes = [
    {
        from: 'Warsaw',
        to: 'Poznań',
        date: '2023-12-23',
        time: '12:45',
        intercity: true
    },
    {
        from: 'Szczecin',
        to: 'Poznań',
        date: '2023-12-24',
        time: '12:45',
        intercity: false
    },
    {
        from: 'Szczecin',
        to: 'Poznań',
        date: '2023-12-23',
        time: '07:25',
        intercity: true
    },
    {
        from: 'Szczecin',
        to: 'Poznań',
        date: '2023-12-07',
        time: '21:13',
        intercity: false
    }
];

let sortedResults = trainRoutes.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

const results_table = document.querySelector('#results_table');

// wyswietlenie nazwy typu pociagu
const trainType = (isIC) => {
    // po prostu dawno switch nie uzywalem ;)
    let type = ''
    switch (isIC) {
        case true:
            type = 'IC';
            break;
        case false:
            type = 'Regio';
            break;
        default:
            type = 'Brak danych';
            break;
    }
    return type;
}

// dodanie pojedynczego wpisu
const addResult = (result) => {
    const type = trainType(result.intercity);
    results_table.innerHTML += `
    <tr>
    <td>${result.date}</td>
    <td>${result.time}</td>
    <td>${result.from}</td>
    <td>${result.to}</td>
    <td>${type}</td>
    </tr>        
    `;
}

const showConnections = (connectionList) => {
    results_table.innerHTML = '';
    // ewentualnie posortowac wg daty i czasu - uzyc babelka
    connectionList.forEach(connection => {
        addResult(connection);
    });
}

// loading all records at the beginning 
showConnections(sortedResults);

// obsluga wyszukiwania
const searchForm = document.querySelector('#searchForm');
const dateInput = document.querySelector('#dateInput');
const timeInput = document.querySelector('#timeInput');
// const fromInput = document.querySelector('#fromInput');
// const toInput = document.querySelector('#toInput');
const cityInput = document.querySelector('#cityInput');
const icInput = document.querySelector('#icInput');
const showAllBtn = document.querySelector('#showAllBtn');


// ustawienia biezacej daty i czasu
const setDateAndTime = () => {
    const fullDate = new Date()//.toLocaleDateString("de-DE");
    dateInput.valueAsDate = fullDate;
    const formattedTime = fullDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    timeInput.value = formattedTime;
}
setDateAndTime();

// wyswietlenie wszystkich zapisanych rekordow
const showAllRecords = () => {
    sortedResults = trainRoutes.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    showConnections(sortedResults);
}

// walidacja formularza - wlasciwie, to nie jest ona potrzebna, gdyz
// zawsze mozna po prostu wyswietlic polaczenia ze wzgledu na typ pociagu
const formValidation = (event) => {
    event.preventDefault();
    // if (cityInput.value !== '' && dateInput.value !== '') {
    //     searchConnection();
    // } else {
    //     alert('Musisz uzupelniec wszystkie pola');
    // }
    searchConnection();
}

// szukanie polaczenia
const searchConnection = () => {
    let matchingConnections = [];
    let filteredResults = trainRoutes;

    // sprawdzanie IC
    filteredResults.forEach(train => {
        if (icInput.checked === train.intercity) {
            matchingConnections.push(train);
        }
    });
    filteredResults = matchingConnections;

    // sprawdzanie daty i czasu
    if (dateInput.value !== '' || timeInput.value !== '') {
        matchingConnections = [];
        filteredResults.forEach(train => {
            if (Date.parse(dateInput.value) < Date.parse(train.date)) {
                matchingConnections.push(train);
            }
            //uwzglednienie czasu, kiedy dni sa taki same - aby pokazac tylko pociagi, ktore jeszcze nie odjechaly
            if (Date.parse(dateInput.value) === Date.parse(train.date)) {
                if (timeInput.value !== '') {
                    if (timeInput.value <= train.time) {
                        matchingConnections.push(train);
                    }
                } else {// czas nie zostal wprowadzony, bierzemy wszystkie polaczenia
                    matchingConnections.push(train);
                }
            }
        });
        filteredResults = matchingConnections;
    }

    // sprawdzanie miejscowosci
    if (cityInput.value !== '') {
        matchingConnections = [];
        filteredResults.forEach(train => {
            if (train.from === cityInput.value || train.to === cityInput.value) {
                matchingConnections.push(train);
            }
        });
        filteredResults = matchingConnections;
    }

    showConnections(filteredResults);
}

// dodawanie zdarzen na stronie
showAllBtn.addEventListener('click', showAllRecords);
searchForm.addEventListener('submit', formValidation);
