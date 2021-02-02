function Cat(color, name) {
  this.color = color
  this.name = name
}

const cat = new Cat('black', 'Barsik')
console.log(cat);
//-------------------------------------------------

function myNew(constructor, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  return constructor.apply(obj, args) || obj
}

const another_cat = myNew(Cat, 'white', 'Tom')
console.log(another_cat);
