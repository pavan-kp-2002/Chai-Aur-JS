let shoppingCart = []

shoppingCart.push({
        name:"Apple",
        price: 10,
        quantity:2
    },
    {
        name: "Bananna",
        price: 5,
        quantity: 5
    },
    {
        name: "Orange",
        price: 5,
        quantity:10
    }
)

function calculateTotalCartCost(shoppingCart){
    let totalPrice = 0;
    for (let item of shoppingCart){
        totalPrice += item.price;
    }
    return totalPrice;
}

function addNewItem(name, price, quantity){
    shoppingCart.push(
        {
            name : name,
            price: price,
            quantity: quantity
        }
    )
}

console.log(shoppingCart)
addNewItem("Watermelon", 20, 5)
console.log(shoppingCart)
console.log(`Cart total cost: ${calculateTotalCartCost(shoppingCart)}`)


