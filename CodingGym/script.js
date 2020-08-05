// Number.prototype.minus = (function (x) {
//   return this - x;
// })(4)
//   .minus(3)
//   .minus(2)
//   .minus(5);

// function test(a) {
//   return function rrr(b) {
//     return a + b;
//   };
// }

// test(2)(3);

// const shop = {
//   items: [
//     { name: "T-shirt", price: 300 },
//     { name: "Jeans", price: 200 },
//   ],
//   clients: [
//     {
//       id: 3,
//       items: [{ name: "T-shirt", price: 300 }],
//       budget: 300,
//     },
//     {
//       id: 4,
//       items: [
//         { name: "T-shirt", price: 300 },
//         { name: "Jeans", price: 200 },
//       ],
//       budget: 800,
//     },
//     {
//       id: 5,
//       items: null,
//       budget: 600,
//     },
//   ],
// };


// function summItems (arr) {
//     return arr.reduce((acc, el) => {
//         return acc + el.price;
//     }, 0)
// }

// function summPrice (arr) {
//     return arr.reduce((acc, el) => {
        
//         return el.items ?  acc + el.items.reduce((inAcc, element) => {
//             return inAcc + element.price;
//         }, 0) : acc;
//     }, 0)
// }

// console.log(summPrice (shop.clients));


// function Animal (name) {
//     this.name = name;
// }

// Animal.prototype.say = function() {
//     console.log("gav");
// }

// const dog = new Animal("aaa");

// function Cat (name, color) {
//     Animal.apply(this, [name]);
//     this.color = color;
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// Cat.prototype.say = function () {
//     Animal.say();

// }

let x = new Promise((res, rej) => {
     setTimeout(() => res(2), 3000);
})

x.then((a)=> console.log(a))
