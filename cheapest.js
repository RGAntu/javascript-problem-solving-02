const mobiles = [
  {
    brand: "Samsung",
    model: "Galaxy S23",
    display: "6.1-inch AMOLED",
    processor: "Snapdragon 8 Gen 2",
    camera: "50MP Triple Camera",
    battery: "3900mAh",
    price: 799
  },
  {
    brand: "Apple",
    model: "iPhone 14",
    display: "6.1-inch OLED",
    processor: "A15 Bionic",
    camera: "12MP Dual Camera",
    battery: "3279mAh",
    price: 899
  },
  {
    brand: "Xiaomi",
    model: "Redmi Note 12",
    display: "6.67-inch AMOLED",
    processor: "Snapdragon 685",
    camera: "50MP Triple Camera",
    battery: "5000mAh",
    price: 299
  },
  {
    brand: "OnePlus",
    model: "OnePlus 11",
    display: "6.7-inch AMOLED",
    processor: "Snapdragon 8 Gen 2",
    camera: "50MP Triple Camera",
    battery: "5000mAh",
    price: 699
  },
  {
    brand: "Google",
    model: "Pixel 7",
    display: "6.3-inch OLED",
    processor: "Google Tensor G2",
    camera: "50MP Dual Camera",
    battery: "4355mAh",
    price: 599
  },
  {
    brand: "Oppo",
    model: "Reno 8",
    display: "6.4-inch AMOLED",
    processor: "MediaTek Dimensity 1300",
    camera: "50MP Triple Camera",
    battery: "4500mAh",
    price: 499
  },
  {
    brand: "Vivo",
    model: "V25",
    display: "6.44-inch AMOLED",
    processor: "MediaTek Dimensity 900",
    camera: "64MP Triple Camera",
    battery: "4500mAh",
    price: 449
  },
  {
    brand: "Realme",
    model: "GT Neo 3",
    display: "6.7-inch AMOLED",
    processor: "MediaTek Dimensity 8100",
    camera: "50MP Triple Camera",
    battery: "5000mAh",
    price: 399
  },
  {
    brand: "Motorola",
    model: "Edge 40",
    display: "6.55-inch OLED",
    processor: "MediaTek Dimensity 8020",
    camera: "50MP Dual Camera",
    battery: "4400mAh",
    price: 499
  },
  {
    brand: "Nokia",
    model: "G60",
    display: "6.58-inch LCD",
    processor: "Snapdragon 695",
    camera: "50MP Triple Camera",
    battery: "4500mAh",
    price: 349
  }
];


function getCheapestPhone(mobiles){
    let cheapMobile = mobiles[0]
    
    for( const mobile of mobiles){
        if( mobile.price < cheapMobile.price){
            cheapMobile = mobile;
        }
    
    }
    return cheapMobile;
}

const cheap = getCheapestPhone(mobiles);
console.log("The cheapest phone is ", cheap);