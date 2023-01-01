const btn = document.querySelector('#task1_btn');

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
    }
];

const findByID = (userList, userID) => {
    if (userList.length - 1 < userID) {
        return "Wprowadzony indeks nie zostal odnaleziony";
    }

    for (const element of userList) {
        if (element.id === userID) {
            return element.user_name;
        }
    }


}

const executeTask_1 = (event) => {
    console.log(findByID(people, 3));
    console.log(findByID(people, 13));
    console.log(findByID(people, 1));
}


btn.addEventListener('click', executeTask_1);