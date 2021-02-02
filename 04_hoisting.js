// hoisting - механизм "поднятия", в котором переменные или обьявления функции
// передвигаются вверх своей области видимости, перед тем как код будет выполнен.
// Механизм "поднятия" передвигает только обьявления функции или переменной!!!
// Инициализации переменных остаются на своих местах.

console.log(summ(1, 41)); // 42

function summ(a, b) {
  return a + b;
}

console.log(i); // undefined
var i = 25;
console.log(i); // 25

//-----------------------------------//
// var подвержена hoisting           //
// const и let не подвержены hoisting//
//-----------------------------------//

// Function Expression & Function Declaration

console.log(square(25));
function square(num) {
  return num ** 2;
} // Function Declaration

console.log(sum(2, 3)); // <= ERROR!
var sum = function(a, b) {
  return a + b;
} // Function Expression
console.log(sum(2, 3));
