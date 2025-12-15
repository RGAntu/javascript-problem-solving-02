/**
 * chair --> 3 cft 
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity( chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    
    const totalChairWood = perChairWood * chairQuantity;
    const totalTableWood = perTableWood * tableQuantity;
    const totalBedWood = perBedWood * bedQuantity;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;

}

const wood = woodQuantity(5, 0, 1);
console.log("Wood needed",wood);


// shopping price 

/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */

function shopping(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 600;
    const perShoePrice = 1500;

    const totalShirtPrice = perShirtPrice * shirtQuantity;
    const totalPantPrice = perPantPrice * pantQuantity;
    const totalShoePrice = perShoePrice * shoeQuantity;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    
    return totalPrice;
}


const totalShopping = shopping(2, 2, 1);
console.log("Total Shopping Price", totalShopping);