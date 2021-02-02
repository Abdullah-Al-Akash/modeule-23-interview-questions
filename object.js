const student =[
    {id: 21, Name: 'Omar Sunny'},
    {id: 31, Name: 'Manna'},
    {id: 41, Name: 'Moyyuuuri'},
    {id: 71, Name: 'DipJol'}
]

const names = student.map(s => s.Name);
const id = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);

const biggerOne = student.find(s => s.id>40);

console.log(biggerOne);

// console.log(bigger);

// console.log(id);
// console.log(names);