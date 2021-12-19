// Задание 1//

let digit = 0;
while (digit <= 100) {
let check = true;
 for (let i = 2; i < digit; i++){
  if (digit % i === 0) {
   check = false;
   break;
}
}
  if (check) console.log(digit);
    digit++;
}


// Задание 2//

var basket = [
{
    product: "t-shirt",
    price: (30, 100)
},
{
    product: "jacet",
    price: (40, 150)
},
{
    product: "blouse",
    price: (50, 200)
},
{
    product: "blazer",
    price: (100, 200)
}
];
var  countCartPrice = 0;
for (let prod of basket){
countCartPrice += prod.price;
console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины составит: " +  countCartPrice + " у.е.");