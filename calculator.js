function add(num1, num2){
    return num1 + num2 ;
}

function sub(num1, num2){
    return num1 - num2 ;
}

function multiply(num1, num2){
    return num1 * num2;
}


function divide(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if(operation === "add"){
        const result = add(a, b)
        return result;
    }
    else if( operation === "sub"){
        const result = sub(a,b);
        return result;
    }
    else if( operation === "multiply"){
        const result = multiply(a, b);
        return result;
    }
    else if( operation === 'divide'){
        return divide(a, b);
    }
    else{
        return "only 'add', 'sub', 'multiply', 'divide' operation is allowed."
    }
}


// const result = calculator(5, 7, 'add');
// const result = calculator(5, 7, 'sub');
// const result = calculator(5, 7, 'multiply');
const result = calculator(5, 7, 'divide');
console.log("Addition of two numbers ", result);