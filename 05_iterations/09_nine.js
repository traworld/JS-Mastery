// reduce js

//const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10

// from the above example we can say that in reducejs we can accumulator and current value
// current value is the given array
// accumulator takes the inintial value s the first hen afte the addition ittakes the sum of the firs addition and do the sum again

// usecase shopping cart adding function

const shop = [1,200,300,45,600]

const cartvalue = shop.reduce( function (acc , currval) {
    return acc + currval
}, 0 )
console.log(cartvalue);


/// now in arrow function

const arcart = shop.reduce( (acc , curval) => acc + curval , 0 )
console.log(arcart);

// eg3


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);