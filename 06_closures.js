// closures - замыкания
// Замыкание - это когда функция имеет доступ до переменных из вышестоящего scope.

function sayHelloTo(name) {
  const message = 'Hello ' + name

  return function() {
    console.log(message)
  }
}

const helloToElena = sayHelloTo(name='Elena')
helloToElena()
//-------------------------------------------------------------

function createFrameworkManager() {
  const fw = ['Angular', 'React']

  return {
    print: function() {
      console.log(fw.join(' '));
    },
    add: function(framework) {
      fw.push(framework)
    }
  }
}

const manager = createFrameworkManager()
// console.log(manager);
manager.print()
manager.add('VueJS')
manager.print()

// SetTimeout
const fib = [1, 2, 3, 5, 8, 13]
for (let i = 0; i < fib.length; i++) {
  setTimeout(function() {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500)
}

// const fib = [1, 2, 3, 5, 8, 13]
// for (var i = 0; i < fib.length; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(`fib[${j}] = ${fib[j]}`);
//     }, 1500)
//   })(i)
// }
