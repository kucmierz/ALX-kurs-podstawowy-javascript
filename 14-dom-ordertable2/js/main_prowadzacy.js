const addOrderForm = document.querySelector('#add-order-form');
const ordersList = document.querySelector('#orders-list');
const sortButton = document.querySelector('#sort-button');

let orders = [];

function addOrder(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const price = document.querySelector('#price').value;

    const order = {
        id: Date.now(),
        name: name,
        price: parseFloat(price)
    }

    orders.push(order);

    renderOrders();

    addOrderForm.reset();
}

function renderOrders() {

    ordersList.innerHTML = '';

    orders.forEach(order => {
        // Tworzenie nowego wiersza tabeli
        const row = document.createElement('tr');

        // Tworzenie komórek z danymi zamówienia
        const idCell = document.createElement('td');
        idCell.textContent = order.id;
        const nameCell = document.createElement('td');
        nameCell.textContent = order.name;
        const priceCell = document.createElement('td');
        priceCell.textContent = order.price;
        const actionCell = document.createElement('td');
        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('delete-icon');
        deleteIcon.textContent = 'X';
        deleteIcon.dataset.id = order.id;

        // Dodanie komórek do wiersza tabeli
        actionCell.appendChild(deleteIcon);
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(actionCell);

        // Dodanie wiersza do listy zamówień
        ordersList.appendChild(row);
    });
}

// Funkcja obsługująca sortowanie zamówień
function sortOrders() {
    orders.sort((a, b) => a.price - b.price);

    // Wyrenderowanie listy zamówień
    renderOrders();
}

function deleteOrder(event) {
    if (event.target.classList.contains('delete-icon')) {
        // Pobranie ID zamówienia do usunięcia
        const id = event.target.dataset.id;

        // Usuwanie zamówienia z listy
        orders = orders.filter(order => order.id != id);

        // Wyrenderowanie listy zamówień
        renderOrders();
    }
}

sortButton.addEventListener('click', sortOrders);
ordersList.addEventListener('click', deleteOrder);
addOrderForm.addEventListener('submit', addOrder)