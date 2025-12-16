// Number
function multiply (num1, num2){
    if( typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "please provide a number";
    }

    const mult = num1 * num2;
    return mult;
}

const result = multiply('5', 'seven');
// console.log(result);

// String
function fullName(firstName, secondName){
    if(typeof firstName !== 'string'){
        return "First Name should be string";
    }
    if(typeof secondName !== 'string'){
        return "Second Name should be string";

    }
    const name = firstName + ' ' + secondName;
    return name;

}

const name = fullName(5, 'ghosh');
// console.log(name); 

// Object
function getPrice(product){
    if(typeof product !== 'object'){
        return "Please provide an object"
    }
    const price = product.price;
    return price;
}

// const price = getPrice({name: 'redoy ghosh', price: 35, color: "brown" });
const price = getPrice(5);
// console.log(price);


// Array 
// array is object
function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return "Please provide an array";
    }

    const second = numbers[1];
    return second;
}

// const second = getSecond(456);
const second = getSecond([45, 61, 2]);
console.log(second);

