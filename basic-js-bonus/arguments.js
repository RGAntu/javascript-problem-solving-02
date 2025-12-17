function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments[4]); // there is an arguments which is an array like object
}

add(12, 13, 33, 44, 55);