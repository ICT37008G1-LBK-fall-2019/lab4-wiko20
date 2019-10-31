let people = [
    {
        id: 1,
        name: 'zaza'
    },
    {
        id: 2,
        name: 'cotne'
    },
    {
        id: 3,
        name: 'goga'
    },
    {
        id: 4,
        name: 'giorgi'
    }
];

function names(obj) {
    let setNames = [];
    for (let o of obj) {
        setNames.push(o.name);
    }

    return new Set(setNames);
}

console.log(names(people));
