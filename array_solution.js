const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000}, ];
    console.log("the product that will be expensive in the array")

    const expensiveItems = item.filter(item => item.price >= 1000);

console.log(expensiveItems);

console.log("the full price of all product combined");
let total = 0;

for (let i = 0; i < item.length; i++) {
  total += item[i].price;
}

console.log(total);
console.log("the full price of all product combined and remove product that are under the 10 dollar"); 

const filteredItems = item.filter(item => item.price >= 10);

for (let i = 0; i < filteredItems.length; i++) {
  total += filteredItems[i].price;
}
console.log(total);
console.log("the product that will be bought when you don't have much money I mean Cheap one");

const cheapItems = item.filter(item => item.price <= 10);

console.log(cheapItems);