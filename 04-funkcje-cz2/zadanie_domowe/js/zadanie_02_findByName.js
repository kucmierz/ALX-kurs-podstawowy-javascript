const btn = document.querySelector('#task2_btn');

const people = [
    {
        id: 1,
        user_name: 'Marek'
    },
    {
        id: 2,
        user_name: 'Marcin'
    },
    {
        id: 3,
        user_name: 'Marysia'
    },
    {
        id: 4,
        user_name: 'Marian'
    },
    {
        id: 5,
        user_name: 'Mariola'
    },
    {
        id: 6,
        user_name: 'Agnieszka'
    },
    {
        id: 7,
        user_name: 'Pawel'
    }
];


const filterByName = (searchedList, searchedPattern) => {
    outputList = [];
    for (const element of searchedList) {
        const user_name = element.user_name.toLowerCase();
        if (user_name.includes(searchedPattern)) {
            outputList.push(element);
        }
    }
    return outputList;
}

const executeTask_2 = (event) => {
    console.log(filterByName(people, 'e'));
    console.log(filterByName(people, 'ag'));
    console.log(filterByName(people, 'das'));
    console.log(filterByName(people, 'ma'));
}

btn.addEventListener('click', executeTask_2);
