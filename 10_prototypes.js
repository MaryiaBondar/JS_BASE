// __proto__ указывает на объект от которого был создан инстанс - ES6
// Object.getPrototypeOf() - ES5

function Cat(name, color) {
  this.name = name
  this.color = color
}

Cat.prototype.voice = function() {
  console.log(`Cat ${this.name} says meow`)
}

const cat = new Cat('Tom', 'white')

cat.voice()

// ================================================
function Person() {}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Eugene'

console.log('skin' in person) // true
console.log(person.legs)
console.log(person.name)

console.log(person.hasOwnProperty('name')) // true
console.log(person.hasOwnProperty('skin')) // false

// ================================================
// Object.create()
const proto = {year: 2019}
const myYear = Object.create(proto)

console.log(myYear.year)
// console.log(myYear.hasOwnProperty('year'))
// console.log(myYear.__proto__ === proto)
proto.year = 2020
console.log(myYear.year)
