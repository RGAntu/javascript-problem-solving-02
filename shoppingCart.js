const products = [
  {
    name: "shampoo",
    price: 300,
    quantity: 5
  },
  {
    name: "comb",
    price: 100,
    quantity: 3
  },
  {
    name: "shirt",
    price: 500,
    quantity: 2
  },
  {
    name: "pant",
    price: 1200,
    quantity: 8
  },
];


function cartTotal (products){
   let total = 0;
    for(const product of products){
     total = total + product.price * product.quantity;
        
    }

return total;
}


const totalShopping = cartTotal(products);
console.log(totalShopping);