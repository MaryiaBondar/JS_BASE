// let
// переменные let можно переопределять

let a = 'Variable a'
let b = 'Variable b'

// block scope
// переменная let созданная внутри scope доступна только внутри scope
{
  a = 'New Variable A' // переопределяет "a" вне scope
  let b = 'Local Variable B' // внутри scope новое значение. Внешняя "b" осталась неизменной
  console.log(a); // New Variable A
  console.log(b); // Local Variable B
}
console.log(a); // New Variable A
console.log(b); // Variable b

// const
// переопределять нельзя, если это примитивный тип.
// массив созданный с помощью const изменять можно. Поля обьектов также можно изменять.
