"use strict";
//Objects
const Bread = {
    id: 1,
    name: 'Bread',
    price: 0.4,
    category_id: 1
};
const BreadStuff = {
    id: 1,
    name: 'BreadStuf',
    sale_amount: 0.6
};
const knives = {
    id: 2,
    name: 'Knives',
    price: 3.0,
    category_id: 2
};
const Silverware = {
    id: 2,
    name: 'Silverware',
    sale_amount: 0.50
};
//myFunction
const myFunction = (product, category) => {
    const cost = (product.price * category.sale_amount).toFixed(2);
    const sale = `The ${product.name} is on sale for $${cost}!`;
    const wrongCategory = `The product '${product.name}' is not in that category`;
    return product.category_id == category.id ? sale : wrongCategory;
};
console.log(myFunction(Bread, BreadStuff));
console.log(myFunction(Bread, Silverware));
console.log(myFunction(knives, BreadStuff));
console.log(myFunction(knives, Silverware));
