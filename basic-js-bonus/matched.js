const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


const products = [
  { "id": 1, "name": "Realme P4x 5G", "price": 13999 },
  { "id": 2, "name": "Samsung Galaxy S24 Ultra", "price": 84999 },
  { "id": 3, "name": "OPPO Reno 15 5G", "price": 39990 },
  { "id": 4, "name": "Vivo X300 Pro 5G", "price": 109999 },
  { "id": 5, "name": "Samsung Galaxy Tab S9 Tablet", "price": 53490 },
  { "id": 6, "name": "iQOO 15", "price": 72999 },
  { "id": 7, "name": "Motorola Moto G57 Power", "price": 13999 },
  { "id": 8, "name": "Lenovo IdeaPad Slim 3 Laptop", "price": 67990 },
  { "id": 9, "name": "OnePlus Buds 4", "price": 5899 },
  { "id": 10, "name": "Xiaomi Redmi K90 Pro Max", "price": 50990 }
];


function matchedProducts(products, search){
    const matched = [];
    for ( const product of products){
    if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
    }
}
return matched;
}

// const result = matchedProducts(products, '5G');
const result = matchedProducts(products, 'galaxy');
console.log(result)