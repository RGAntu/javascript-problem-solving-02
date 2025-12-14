const jim = 82;
const tim = 89;
const kim = 66;

if(jim > tim && jim > kim){
    console.log("jim is the ultimate boss");
}
else if ( tim > jim && tim > kim){
    console.log("Tim is the main boss")
}
else{
    console.log("Kim is the only boss");
}




function maxOfThree(jim, tim, kim){
    if(jim > tim && jim > kim){
        return "Jim is the Ultimate boss";
    }
    else if( tim > jim && tim > kim){
        return "Tim is the main boss";
    }
    else{
        return "Kim is the only boss";
    }
}

const finalBoss = maxOfThree(33, 77, 99);
console.log(finalBoss);



const max = Math.max(22, 20, 222, 332, 999);
console.log("max is using Math.max", max);