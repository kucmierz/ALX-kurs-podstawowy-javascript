const orderForm = document.querySelector('#orderForm');
const orderName = document.querySelector('#orderName');
const orderPrice = document.querySelector('#orderPrice');
const orderTableBody = document.querySelector('#orderTableBody');
const errorMessage = document.querySelector('#errorMessage');
const calculateSumButton = document.querySelector('#calculateSum');
const orderSum = document.querySelector('#orderSum');
const calculateBiggestElementButton = document.querySelector('#calculateBiggestElementButton')
const biggestOrderElement = document.querySelector('#biggestOrderElement');
const calculateAveragePriceButton = document.querySelector('#calculateAveragePriceButton');
const averagePrice = document.querySelector('#averagePrice');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');

let orders = [
    {
        id: 1,
        name: 'Cake',
        price: 3.99
    },
    {
        id: 2,
        name: 'Butter',
        price: 8.99
    }
];

let searchResults = orders;

const handleSubmit = (event) => {
    event.preventDefault();

    if (
        orderName.value === ''
        || orderPrice.value === ''
        || isNaN(parseFloat(orderPrice.value))
    ) {
        errorMessage.innerText = 'Pole formularza wypelnione nieprawidlowo';
        return;
    }

    let orderId = 1;

    if (orders.length > 0) {
        orderId = orders[orders.length - 1].id + 1;
    }

    const newOrder = {
        id: orderId,
        name: orderName.value,
        price: parseFloat(orderPrice.value)
    }

    orders.push(newOrder)

    orderTableBody.innerHTML += `
    <tr>
      <td>${orderId}</td>
      <td>${orderName.value}</td>
      <td>${orderPrice.value}zl</td>
      <td><button id="${orderId}"> X </button> </td>
    </tr>
  `

    orderName.value = '';
    orderPrice.value = '';
}

// Propagacja zdarzen
// Propagacja zdarzen, polega na tym, ze klikamy w globalny element na stronie i dowiadujemy sie, jaki element zostal klikniety.

// Dzieje sie to poprzez przekazywanie zdarzen. Klikniety element, przekazuje informacje o evencie do miejsca, w ktorym event zostal zlapany.

const handleTableClick = (event) => {
    // event.target zwraca nam informacje o elemencie, ktory wywowal dany event
    // console.log(event.target)

    // tylko button zawiera ID, dlatego pisze warunek, ktory sprawdza czy element ma ID. Jesli ma, to wiem na pewno ze jest to button.

    if (event.target.id !== "") {
        // metoda remove sluzy do usuwania elementu z HTML
        // event.target.remove();

        // w DOM istnieja metody, ktore sluza do dostania sie do elementu wzgledem polozenia obecnego
        event.target.parentElement.parentElement.remove()


        // Usuwanie z tablicy obiektow

        // Usuwanie z tablicy obiektow robi sie za pomoca petli i dodatkowej tablicy pomocniczej. Przechodzimy przez wszystkie elementy petli i jesli id elementu przez ktory przechodzimy jest rozny od id elementu ktory chcemy usunac, to dodajemy do tablicy pomocniczej. Jesli id elementu ktory chcemy usunac jest rowny id elementu przez ktory przechodzimy petla, to on ma sie nie wrzucic do tablicy.
        let filteredOrders = [];

        orders.forEach(order => {
            if (parseInt(event.target.id) !== order.id) {
                filteredOrders.push(order);
            }
        })

        // Podmiana zamowien jest potrzebna.
        orders = filteredOrders
    }
}


const calculateOrderSum = () => {
    let sum = 0;

    orders.forEach(order => {
        sum += order.price
    })

    orderSum.innerText = `${sum}zł`;
}

const calculateBiggestElement = () => {
    let biggestElement = orders[0];

    orders.forEach(order => {
        if (order.price > biggestElement.price) {
            biggestElement = order;
        }
    });

    biggestOrderElement.innerText = `${biggestElement.name} z ceną ${biggestElement.price}`;
}

const calculateAveragePrice = () => {
    let sum = 0;

    orders.forEach(order => {
        sum += order.price
    })

    averagePrice.innerText = `${(sum / orders.length).toFixed(2)}zł`
}

const renderOrders = () => {
    orderTableBody.innerHTML = '';

    searchResults.forEach(order => {
        orderTableBody.innerHTML += `
      <tr>
        <td>${order.id}</td>
        <td>${order.name}</td>
        <td>${order.price}zl</td>
        <td><button id=${order.id}> X </button> </td>
      </tr>
    `
    })
}

// @TODO: Naprawić search

const handleSearch = (event) => {
    event.preventDefault();

    const filteredResults = []
    // Search dziala podobnie jak przy usuwaniu. Potrzebujemy przejsc petla przez wszystkie zamowienia i sprawdzic, czy name elementu przez ktory aktualnie przechodzimy, zawiera to co jest w inpucie.

    orders.forEach(order => {
        if (order.name.toLowerCase().includes(searchInput.value)) {
            filteredResults.push(order);
        }
    })

    searchResults = filteredResults

    renderOrders();
}


orderTableBody.addEventListener('click', handleTableClick);
orderForm.addEventListener('submit', handleSubmit);


renderOrders();

calculateSumButton.addEventListener('click', calculateOrderSum)
calculateBiggestElementButton.addEventListener('click', calculateBiggestElement)
calculateAveragePriceButton.addEventListener('click', calculateAveragePrice)
searchForm.addEventListener('submit', handleSearch)