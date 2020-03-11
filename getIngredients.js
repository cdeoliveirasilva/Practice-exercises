const vegetables = ['ginger', 'onions', 'lentils', 'carrot']
const fruits = ['apple', 'tomato', 'pineapple']
const dairy = ['ice cream', 'sour cream', 'yoghurt']

const curry = [ vegetables[0], vegetables[1], vegetables[2], fruits[1], dairy[2] ]

const fruitSalad = [ fruits[0], fruits[1], fruits[2] ]
const tomatoSoup = [ vegetables[1], vegetables[2], vegetables[3], fruits[1], dairy[1] ]


// reassigning some of the elements of the original arrays in case different ingredients are needed

console.log(curry) // [ ginger, onions, lentils, tomato, yogurt ]
console.log(fruitSalad)
console.log(tomatoSoup)
