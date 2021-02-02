//  В js существует 7 типов данных:
// null, undefined, boolean, number, string, objects, symbol

console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof 'string'); // string
console.log(typeof undefined); // undefined
console.log(typeof {}); // objects
console.log(typeof Symbol('JS')); // symbol
console.log(typeof null); // null

console.log(typeof NaN); // NaN
console.log(typeof
  function() {}); // object (function)

// Приведение типов
let language = 'JavaScript'
if (language) {
  console.log('The best language is', language);
}

// Значения которые преобразуются в false
// '', 0, null, undefined, NaN, false
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Строки и числа
// Для строк определен только знак + (конкатенация).
// Во все остальных случаях использования математических знаков, строка преобразуются в число
// Порядок типов очень важен: 4 + 10 + 'px' = '14px'
console.log(1 + '2'); // 12 - string
console.log('' + 1 + 0); // 10 - string
console.log('' - 1 + 0); // -1 - number
console.log('3' * '8'); // 24 - number
console.log(4 + 10 + 'px'); // '14px' - string
console.log('42' - 40); // 2 - number
console.log('42px' - 2); // NaN
console.log(null + 2); // 2 - number
console.log(undefined + 5); // NaN

// == vs ===
// == сравнивает значения с приведением типов
console.log(2 == '2'); // true
console.log(undefined == null); // true
console.log('0' == false); // true
console.log(0 == false); // true
// === строгое сравнение без приведения типов (по значениям) number != string
console.log(2 === '2'); // false
console.log(undefined === null); // false
console.log('0' === false); // false

// неоднозначности
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false
