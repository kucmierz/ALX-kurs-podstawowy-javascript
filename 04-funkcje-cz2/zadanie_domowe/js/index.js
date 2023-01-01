// sortowanie babelkowe
const entry_list = [3, 2, 4, 3, 1, 2, 0];

for (let index = 0; index < entry_list.length; index++) {
    const element_to_move = entry_list[index];
    for (let index2 = 1; index2 < entry_list.length; index2++) {
        const element_to_compare = entry_list[index2];
        // console.log(`elem1: ${element_to_move}, elem2: ${element_to_compare}`);

        if (element_to_move > element_to_compare) {
            const temp = element_to_compare;
            entry_list[index2] = element_to_move;
            entry_list[index] = temp;
        }
    }
}

console.log(entry_list);