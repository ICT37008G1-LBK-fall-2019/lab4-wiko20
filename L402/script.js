
let names = [
    {
        id: 1,
        name: 'zaura1'
    },
    {
        id: 2,
        name: 'zaura2'
    },
    {
        id: 3,
        name: 'zaura3'
    }
];



function objName(obj, name) {
    let count = 0;

    for (let o of obj) {
        if (o.name === name) {
            count++
        }
    }

    return `${name} სახელის რაოდენობაა ` + count;
}

// console.log(objName(names, 'zauri'));
