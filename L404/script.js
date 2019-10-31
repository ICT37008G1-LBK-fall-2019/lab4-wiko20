let people = [
    {
        id: 1,
        name: 'jeko'
    },
    {
        id: 2,
        name: 'levani'
    },
    {
        id: 3,
        name: 'zura'
    },
    {
        id: 4,
        name: 'jora'
    }
];

function sumNames (obj) {
   let myObj = {};

   obj.forEach((item) => {
       if (!myObj[item.name]) {
           myObj[item.name] = 0
       }
       myObj[item.name] += 1;
   });
   return myObj;
}

console.log(sumNames(people));
