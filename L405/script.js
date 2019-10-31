let students = [
    {
        id: 1,
        name: 'nino',
        gpa: 1.6
    },
    {
        id: 2,
        name: 'lasha',
        gpa: 3,
    },
    {
        id: 3,
        name: 'giorgi',
        gpa: 2.3
    },
    {
        id: 4,
        name: 'zaza',
        gpa: 4
    }
];

function gpaStudent(obj, gpa = 2) {
    let sumGpa = 0;

    for (let i = 0; i < obj.length; i++) {
        if (obj[i].gpa >= gpa) {
            sumGpa += obj[i].gpa
        }
    }

    let avgGpa = sumGpa / (obj.length > 0 ? obj.length : 1);

    return avgGpa;

}

console.log(gpaStudent(students, 3));
