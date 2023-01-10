const form = document.querySelector('#product_form');
const product_name = document.querySelector('#product_name');
const product_price = document.querySelector('#product_price');
const product_table = document.querySelector('#table_body');
const errorMessage = document.querySelector('#errorMessage');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const btnShowAllRecords = document.querySelector('#showAllRecords');

//tworzymy strukture naszych zamowien-produktow. 
// ulatwi to lapanie id i zwiekszanie go automatycznie
// takze wyszukiwanie elementow
let orders = [
    {
        id: 1,
        product_name: 'Cake',
        price: 3.99
    },
    {
        id: 2,
        product_name: 'Butter',
        price: 8.59
    },
];

const addNewProduct = (event) => {
    event.preventDefault();
    // console.log(typeof (parseFloat(product_price.value)));
    // walidacja formularza - gdy pola sa puste
    // na zajeciach: if (product_name.value === '' || product_price.value === '' || isNaN(parseFloat(product_price.value)))
    if (product_name.value === '' || product_price.value === '' || typeof (parseFloat(product_price.value)) !== 'number') {
        errorMessage.innerText = 'Pole formularza wypelnione nieprawidlowo';
        return;
    }

    let orderId = 1;
    if (orders.length > 0) {
        orderId = orders[orders.length - 1].id + 1;
    }

    // const orderId = orders[orders.length - 1].id + 1;
    const newOrder = {
        id: orderId,
        product_name: product_name.value,
        price: parseFloat(product_price.value)
    }

    orders.push(newOrder);

    const new_product = `
        <tr>
        <td>${orderId}</td>
        <td>${product_name.value}</td>
        <td>${product_price.value}€</td>
        <td><button id="${orderId}"> X </button></td>
        </tr>
        `;
    product_table.innerHTML += new_product;
    // czyszczenie formularza
    product_name.value = '';
    product_price.value = '';
    errorMessage.innerText = '';
}

//propagacja zdarzen - polega na tym, iz klikamy w element na stronie
// i dowiadujemy sie jaki element zostal klikniety
// dzieje sie to poprzez przekazywanie zdarzen
// klikniety elem przekazuje informacje o evencie do miejsca, w ktorym event zostal zlapany
const handleTableClick = (event) => {
    // event.target zwraca info o elemencie, ktory wywolal dany event
    // console.log(event.target);
    //tylko button zawiera id, dlatego piszemy warunek, czy element ma ID
    if (event.target.id !== '') {
        // console.log('klikam w przycisk?');
        // usuwamy tej element
        // event.target.remove();//usuwa element z html
        // w DOM istnieja metody, ktore sluza do dostania sie do elementu wzgledem polozenia obecnego
        // console.log(event.target.getAttribute('id'));
        event.target.parentElement.parentElement.remove();//pierwszy parentElement to Tag td.drugi to tr

        //usuwanie z tablicy obiektow
        // za pomoca petli i dodatkowej tablicy pomocniczej
        //przechodzimy przez elementy petli, i gdy id elem jest rozny od tego do usuniecia, to dodajemy go do tablicy pomocniczej
        let filteredOrders = [];
        orders.forEach(order => {
            if (order.id !== parseInt(event.target.getAttribute('id'))) {
                filteredOrders.push(order);
            }
        });
        //podmiana zamowien jest potrzebna
        orders = filteredOrders;
        console.log(orders);
    }
}
product_table.addEventListener('click', handleTableClick);
// addEL jest swiadomy tylko i wylacznie elementow html ktore juz byly zaladowane
// w czasie definiowania tej funkcji
form.addEventListener('submit', addNewProduct);


showArray(orders);
// orders.forEach(order => {
//     product_table.innerHTML += `
//         <tr>
//         <td>${order.id}</td>
//         <td>${order.product_name}</td>
//         <td>${order.price}€</td>
//         <td><button id="${order.id}"> X </button></td>
//         </tr>
//         `;
// })


const btnSum = document.querySelector('#btnSum');
const btnMaxElem = document.querySelector('#btnMaxElem');
const btnAvgPrice = document.querySelector('#btnAvgPrice');

function arraySum(myArray) {
    let sum = 0;
    myArray.forEach(elem => {
        sum += elem.price;
    })
    return sum;
}

const getOrderSum = (event) => {
    const orderSum = arraySum(orders);
    // orders.forEach(order => { orderSum += order.price });
    //wyswietlenie wyniku
    const orderSumSpan = document.getElementById('orderSum');
    orderSumSpan.innerText = `${orderSum}€`;
}


const getMaxElem = (event) => {
    let maxElem = orders[0];
    orders.forEach(order => {
        if (maxElem.price < order.price) {
            maxElem = order;
        }
    });
    //wyswietlenie wyniku
    const orderMaxElemSpan = document.getElementById('biggestOrderElement');
    orderMaxElemSpan.innerText = `
    id: ${maxElem.id}, name: ${maxElem.product_name}, price: ${maxElem.price} €
    `;
}
const getPriceAvg = (event) => {
    const productPriceSum = arraySum(orders);
    const priceAvg = (productPriceSum / orders.length).toFixed(2);
    console.log(productPriceSum);
    //wyswietlenie wyniku
    const orderAvgSpan = document.getElementById('averagePrice');
    orderAvgSpan.innerText = `${priceAvg}€`;
}

btnSum.addEventListener('click', getOrderSum);
btnMaxElem.addEventListener('click', getMaxElem);
btnAvgPrice.addEventListener('click', getPriceAvg);

const searchName = (event) => {
    event.preventDefault();
    // console.log(searchInput.value);
    let filteredOrders = [];
    orders.forEach(order => {
        if (order.product_name.toLowerCase().includes(searchInput.value)) {
            filteredOrders.push(order);
        }
    });
    showArray(filteredOrders);
}

function showArray(myArray) {
    product_table.innerHTML = '';

    myArray.forEach(elem => {
        product_table.innerHTML += `
        <tr>
        <td>${elem.id}</td>
        <td>${elem.product_name}</td>
        <td>${elem.price}€</td>
        <td><button id="${elem.id}"> X </button></td>
        </tr>
        `;
    })

}

const showAllRecords = () => {
    showArray(orders);
}

btnShowAllRecords.addEventListener('click', showAllRecords);
searchForm.addEventListener('submit', searchName);