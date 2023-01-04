const ascBubbleBtn = document.querySelector('#run_bubble_asc_btn');
ascBubbleBtn.addEventListener('click', runBubbleSortAsc);

const descBubbleBtn = document.querySelector('#run_bubble_desc_btn');
descBubbleBtn.addEventListener('click', runBubbleSortDesc);

const sortMe = [2, 8, 5, 3, 9, 4, 1];

function runBubbleSortAsc() {
    console.log(`Tablica nieposortowana: ${sortMe}`);
    console.log(`Tablica posortowana: ${bubbleSortAsc(sortMe)}`);
}

function runBubbleSortDesc() {
    console.log(`Tablica nieposortowana: ${sortMe}`);
    console.log(`Tablica posortowana: ${bubbleSortDesc(sortMe)}`);
}

function bubbleSortAsc(myList) {
    const sortedList = [];

    for (let index2 = 0; index2 < myList.length - 1; index2++) {
        // console.log(`Iteracja ${index2}`);

        for (let index = 0; index < myList.length - 1; index++) {
            const element_1 = myList[index];
            const element_2 = myList[index + 1];

            if (element_1 >= element_2) {
                myList[index] = element_2;
                myList[index + 1] = element_1;
            }

        }
    }

    return myList;
}


function bubbleSortDesc(myList) {
    const sortedList = [];

    for (let index2 = 0; index2 < myList.length - 1; index2++) {
        // console.log(`Iteracja ${index2}`);

        for (let index = 0; index < myList.length - 1; index++) {
            const element_1 = myList[index];
            const element_2 = myList[index + 1];

            if (element_1 <= element_2) {
                myList[index] = element_2;
                myList[index + 1] = element_1;
            }

        }
    }

    return myList;
}
