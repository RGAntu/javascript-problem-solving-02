const hero = {
    name:"Ajay",
    id: 125,
    address: "India",
    isSingle: true,
    friends: ["Salman", "Shahruk", "Amir", "Akshay"],
    act: function(){
        console.log('Action hero')
    } ,
    bike: {
        brand: "Royal Enfield",
        price: 1000000,
        made: 2024,
        manufacturer: {
            name: 'Royal Enfield',
            ceo: "B. Govindarajan (Govind)",

        }

    }
    
}

// console.log(hero.friends[0]);
console.log(hero.act)
hero.act();