const inventory = [
  { id: 'a1', title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', price: 12.50, stock: 50, categories: ['Science Fiction', 'Comedy'] },
  { id: 'b2', title: 'Dune', author: 'Frank Herbert', price: 15.00, stock: 30, categories: ['Science Fiction', 'Fantasy'] },
  { id: 'c3', title: '1984', author: 'George Orwell', price: 9.99, stock: 75, categories: ['Dystopian', 'Classic'] },
  { id: 'd4', title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 10.25, stock: 0, categories: ['Classic', 'Fiction'] },
  { id: 'e5', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 25.00, stock: 15, categories: ['Fantasy', 'Adventure'] },
  { id: 'f6', title: 'The Martian', author: 'Andy Weir', price: 13.75, stock: 40, categories: ['Science Fiction', 'Adventure'] },
  { id: 'g7', title: 'Pride and Prejudice', author: 'Jane Austen', price: 8.50, stock: 60, categories: ['Romance', 'Classic'] }
];

console.log(getBookTitles(inventory))
console.log(calculateTotalValue(inventory))
console.log(findBookById(inventory, "a1"))
console.log(findBookById(inventory, "g18"))

function getBookTitles(data){
    let array = []
    data.forEach(element =>{
        if(element.stock > 0)
        array.push(element.title)
    })
    return array
}

function calculateTotalValue(data){
    let totalValue = 0
    data.forEach(element => {
        totalValue += element.stock * element.price
    })
    return totalValue
}

function findBookById(data, bookId){
    return data.find(element => element.id === bookId)
}