const products = [
    {
        id: 1,
        name: 'Bread',
        price: 9.99,
        category: 'Bakery'
    },
    {
        id: 2,
        name: 'Banana',
        price: 3.49,
        category: 'Fruits and Vegetables'
    },
    {
        id: 3,
        name: 'Cherry',
        price: 15.66,
        category: 'Fruits and Vegetables'
    },
    {
        id: 4,
        name: 'Apple Cake',
        price: 12.99,
        category: 'Bakery'
    }
];


// 1. Napisz funkcje getSum(), ktora przyjmie jako argument tablice produktow i zwroci suma produktow. Uzyj funkcji return

// getSum(products) -> 42.13
const getSum = (myArray) => {
    let sum = 0;
    myArray.forEach(element => {
        sum += element.price;
    });
    return sum;
}
console.log(`Suma: ${getSum(products)}`);

// 2. Napisz funkcje getTheMostExpensiveProduct, ktora przyjmie jako argument tablice produktow i zwroci najdrozszy produkt

// getTheMostExpensiveProduct(products) -> Obiekt Cherry

const getTheMostExpensiveProduct = (myArray) => {
    let mostExpensive = myArray[0];
    myArray.forEach(element => {
        if (mostExpensive.price < element.price) {
            mostExpensive = element;
        }
    });
    return mostExpensive;
}
const mostExpensive = getTheMostExpensiveProduct(products);
console.log(`Najdrozszy produkt: ${mostExpensive.name}, cena: ${mostExpensive.price}`);

// 3. Napisz funkcje getBakeryProducts, ktora .... i zwroci tablice obiektow, zawierajaca produkty ktorych kategoria to Bakery.

// getBakeryProducts(products) -> Tablica obiektow zawierajaca Bread i Apple Cake

const getBakeryProducts = (myArray, categoryName) => {
    const categoryProducts = [];
    myArray.forEach(element => {
        if (element.category === categoryName) {
            categoryProducts.push(element);
        }
    })
    return categoryProducts;
}

const printProductName = (myArray) => {
    const tempListOfProductNames = [];
    myArray.forEach(element => {
        tempListOfProductNames.push(element.name);
    })
    return tempListOfProductNames.join(', ');
}

const categoryProducts = getBakeryProducts(products, 'Bakery');
console.log(printProductName(categoryProducts));

// 4. Napisz funkcje findProductsWithPrice, ktora przyjmie jako parametr tablice obiektow i cene, powyzej ktorej ma szukac. Ma zwrocic tablice obiektow, zawierajaca produkty, ktorych cena jest rowna lub powyzej zadeklarowanej w argumencie. Jesli drugi parametr nie jest cyfra, zwroc informacje 'Podana cena nie jest cyfra'

// findProductsWithPrice(products, 16) -> []
// findProductsWithPrice(products, 15) -> [Cherry]
// findProductsWithPrice(products, 1) -> wszystkie
// findProductsWithPrice(products, 'damian') -> 'Podana cena nie jest cyfra'

const findProductsWithPrice = (myArray, limitPrice) => {
    //na kursie if(typeof price==="string")
    if (isNaN(limitPrice)) {
        return 'Podana cena nie jest cyfra';
    }
    const filteredProducts = [];
    myArray.forEach(product => {
        if (product.price >= limitPrice) {
            filteredProducts.push(product);
        }
    })
    return filteredProducts;
}
console.log(findProductsWithPrice(products, 16));
console.log(findProductsWithPrice(products, 15));
console.log(findProductsWithPrice(products, 1));
console.log(findProductsWithPrice(products, 'Basia'));


// 5. Napisz funcje searchProducts, ktora przyjmie dwa argumenty - liste produktow i stringa. Wyszukaj produkty, ktorych nazwa posiada w sobie string, podany w drugim argumencie

// searchProducts(products, 'che') -> [Cherry]
// searchProducts(products, 'e') -> [Bread, Cherry, Apple Cake]
// searchProducts(products, 'dsaiojodasda') -> []

const searchProducts = (myArray, searchingPattern) => {
    const filteredProducts = [];
    myArray.forEach(product => {
        if (product.name.toLowerCase().includes(searchingPattern)) {
            filteredProducts.push(product);
        }
    })
    return filteredProducts;
}
console.log(searchProducts(products, 'che'));
console.log(searchProducts(products, 'e'));
console.log(searchProducts(products, 'raczej nie'));