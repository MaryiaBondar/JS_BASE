let a = 42;
let b = a;
b++;
console.log('a', a); // 42
console.log('b', b); // 43

let c = [1, 2, 3];
let d = c;
d.push(4);
console.log('c', c); // [1, 2, 3, 4]
console.log('d', d); // [1, 2, 3, 4]

let e = [1, 2, 3];
let f = e.concat(); // cancat() без параметров возвращает копию массива
f.push(4);
console.log('e', e); // [1, 2, 3]
console.log('f', f); // [1, 2, 3, 4]

console.log(d === f); // false это разные обьекты, с разными значениями памяти
