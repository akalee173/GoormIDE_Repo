var faker=require('faker');


console.log("-------- /n WELCOME TO MY SHOP /n -------------");
for (var i=0; i<10; i++) {
//faker.commerce.productName() + "-" + faker.commerce.price()
console.log(faker.commerce.productName() + " - " + faker.commerce.price());
}



