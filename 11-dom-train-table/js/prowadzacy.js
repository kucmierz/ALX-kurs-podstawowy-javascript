const trainList = document.querySelector('#trainList');
const searchForm = document.querySelector('#searchForm')
const searchInput = document.querySelector('#searchInput');
const intercityCheckbox = document.querySelector('#intercityCheckbox');
const trainFilters = document.querySelector('#trainFilters');

const trainRoutes = [
    {
        from: 'Warsaw',
        to: 'Poznań',
        date: '23.12.2023',
        time: '12:45',
        intercity: true
    },
    {
        from: 'Szczecin',
        to: 'Poznań',
        date: '23.12.2023',
        time: '12:45',
        intercity: true
    },
    {
        from: 'Poznań',
        to: 'Warszawa',
        date: '24.12.2023',
        time: '14:25',
        intercity: false
    }
]


const getUniqueElements = (trains) => {
    const dates = [];

    trains.forEach(route => {
        if (!dates.includes(route.date)) {
            dates.push(route.date);
        }
    })

    return dates;
}

const renderList = (trains) => {
    trainList.innerHTML = '';

    trains.forEach((route) => {
        trainList.innerHTML += `
      <li>
        <p>
          Pociag z <strong> ${route.from} </strong>
          do <strong> ${route.to} </strong>
        </p>
        <p>
          Odjezdza <span> ${route.time} </span>
          dnia <span>${route.date}</span>
        </p>
        <p>Rodzaj pociagu: ${route.intercity ? 'Intercity' : 'Regio'}</p>
      </li>
    `
    })
}

const handleSearch = (event) => {
    event.preventDefault();

    const filteredResults = [];

    trainRoutes.forEach(route => {
        if (
            route.from.toLowerCase().includes(searchInput.value)
            || route.to.toLowerCase().includes(searchInput.value)
        ) {
            filteredResults.push(route);
        }
    })

    renderList(filteredResults);
}

const handleIntercityChekbox = () => {
    if (!intercityCheckbox.checked) {
        renderList(trainRoutes)
        return;
    }

    const filteredResults = [];

    trainRoutes.forEach((route) => {
        if (route.intercity) {
            filteredResults.push(route)
        }
    })

    renderList(filteredResults);
}

const handleFilterChange = (event) => {
    // dataset sluzy do tego, zeby dostac sie do atrybutow data-* w HTML

    // tylko input ma pole data-date
    if (event.target.dataset.date) {
        // jesli checkbox nie jest zaznaczony, pokaz wszystko
        if (!event.target.checked) {
            renderList(trainRoutes)
            return;
        }

        const filteredResults = [];

        trainRoutes.forEach(route => {
            if (route.date === event.target.dataset.date) {
                filteredResults.push(route);
            }
        })

        renderList(filteredResults);
    }
}


renderList(trainRoutes);

const dates = getUniqueElements(trainRoutes);

dates.forEach(date => {
    trainFilters.innerHTML += `
    <label>
      <input type="checkbox" data-date="${date}">
      ${date}
    </label>
  `
})

trainFilters.addEventListener('click', handleFilterChange)
searchForm.addEventListener('submit', handleSearch)
intercityCheckbox.addEventListener('click', handleIntercityChekbox)