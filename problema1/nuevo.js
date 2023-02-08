// -Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que pueden comprar.

// -Si hay 2 o más con el mismo precio, mostrar ambos.
// -Cofla quiere saber cuanto es el vuelto.

let money = parseFloat(prompt("How much money do u have?"));
let iceCreamlist = [
    { name: "Strawberry Icecream", price: 3 },
    { name: "Chocolate Icecream", price: 4 },
    { name: "Coconut Icecream", price: 3 },
    { name: "Vanilla Icrecream", price: 3.5 },
    { name: "Mint Icecream", price: 5.5 },
]

let iceCreamExpensive =[]
iceCreamlist.forEach(function(iceCream) {
    if(iceCream.price <= money) {
        if(iceCreamExpensive.length === 0 || (iceCream.price>iceCreamExpensive[0].price)) {
        iceCreamExpensive = [iceCream];
        } else if(iceCreamExpensive[0].price == iceCream.price) {
            iceCreamExpensive.push(iceCream);
        }
    }
});
let message;
if(iceCreamExpensive.length == 1) {
        message = "With your money, the ice cream more expensive you can buy is: "+ iceCreamExpensive[0].name;
} else if (iceCreamExpensive.length == 2) {
     message = "With your money, the ice creams more expensives you can buy are: "+ iceCreamExpensive[0].name+ " and "+ iceCreamExpensive[1].name;
} else {
    message = "You dont have enough money to buy any ice cream"
}
alert(message);

let change = money - iceCreamExpensive[0].price

alert(`Your change is ${change} `)




