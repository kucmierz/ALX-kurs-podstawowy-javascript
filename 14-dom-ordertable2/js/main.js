let orders = [
    {
        id: 1,
        orderName: 'Zamowienie A',
        price: 15.00
    },
    {
        id: 2,
        orderName: 'Zamowienie B',
        price: 34.45
    },
    {
        id: 3,
        orderName: 'Zamowienie C',
        price: 9.85
    }
];


const orderTable = document.querySelector('#orderTable');
const orderForm = document.querySelector('#orderForm');
const orderInput = document.querySelector('#orderInput');
const priceInput = document.querySelector('#priceInput');
const sortButton = document.querySelector('#sortButton');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');

const showTable = (array) => {
    orderTable.innerHTML = '';
    array.forEach(order => {
        orderTable.innerHTML += `
        <tr>
            <td>${order.orderName}</td>
            <td>${order.price.toFixed(2)} €</td>
            <td data-id="${order.id}"> Usun </td>
        </tr>        
        `;
    });
}

showTable(orders);

const handleOrders = (event) => {
    event.preventDefault();
    if (!orderInput.value || !priceInput.value) {
        return alert('Blad walidacji!');
    }

    const newOrder = {
        id: Date.now(),
        orderName: orderInput.value,
        price: parseFloat(priceInput.value)
    };

    orders.push(newOrder);
    showTable(orders);

}

const handleSort = (ev) => {
    ev.preventDefault();
    const sortedOrders = orders.sort((prev, next) => {
        return prev.price > next.price ? 1 : -1;
    });
    showTable(sortedOrders);
}

const handleOrderClick = (ev) => {
    ev.preventDefault();
    if (!ev.target.dataset.id) { return }
    orders = orders.filter(elem => elem.id !== parseInt(ev.target.dataset.id));
    showTable(orders);
}

const handleSearch = (ev) => {
    ev.preventDefault();
    let filteredOrders = orders;
    const searchedName = searchInput.value.toLowerCase();
    filteredOrders = orders.filter(order => order.orderName.toLowerCase().includes(searchedName));
    showTable(filteredOrders);
}

orderForm.addEventListener('submit', handleOrders);
searchForm.addEventListener('submit', handleSearch);
sortButton.addEventListener('click', handleSort);
orderTable.addEventListener('click', handleOrderClick);