const disha = 22;
const salman = 18;

if(disha > salman){
    console.log("Disha will get the strawberry");
}
else{
    console.log("Salman will get the strawberry")
}


function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }

    else{
        return num2
    }
}

const maxNumber = getMax(20, 19);
const maxNumber2 = getMax(59,77);
const ultimateMax = getMax(maxNumber, maxNumber2)
console.log("Max is two is: ",ultimateMax);