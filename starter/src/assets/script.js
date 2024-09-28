/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  /* Create 3 or more product objects using object literal notation 
     Each product should include five properties
     - name: name of product (string)
     - price: price of product (number)
     - quantity: quantity in cart should start at zero (number)
     - productId: unique id for the product (number)
     - image: picture of product (url string)
  */
  {
    name: 'Cherry',
    price: 1.99,
    quantity: 0,
    productId: 1,
    image: 'images/cherry.jpg'
  },
  {
    name: 'Orange',
    price: 2.99,
    quantity: 0,
    productId: 2,
    image: 'images/orange.jpg'
  },
  {
    name: 'Strawberry',
    price: 3.99,
    quantity: 0,
    productId: 3,
    image: 'images/strawberry.jpg'
  }

];


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) { 
  // addProductToCart should get the correct product based on the productId
  let product = products.find(product => product.productId === productId);
  // addProductToCart should then increase the product's quantity
  product.quantity++;
  // if the product is not already in the cart
  if (!cart.includes(product)) {
    // Add the product to the cart
    cart.push(product);    
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) { 
  // increaseQuantity should get the correct product based on the productId
  let product = products.find(product => product.productId === productId);
  // increaseQuantity should then increase the product's quantity
  product.quantity++;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) { 
  // decreaseQuantity should get the correct product based on the productId
  let product = products.find(product => product.productId === productId);
  // 
  product.quantity--;
  // if the function decreases the quantity to 0, the product is removed from the cart
  if (product.quantity === 0) { 
    removeProductFromCart(productId);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) { 
  // removeProductFromCart should get the correct product based on the productId
  let product = products.find(product => product.productId === productId);
  // removeProductFromCart should update the product quantity to 0
  product.quantity = 0;
  // removeProductFromCart should remove the product from the cart
  cart.splice(cart.indexOf(product), 1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() { 
  // cartTotal should iterate through the cart to get the total cost of all products
  let total = 0;
  // Iterate through the cart to get the total cost of all products
  for (let i = 0; i < cart.length; i++) { 
    // price and quantity is used to determine total cost
    total += cart[i].quantity * cart[i].price;
  }
  // cartTotal should return the total cost of the products in the cart
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() { 
  // emptyCart should iterate through the cart and set the quantity of all products to 0
  cart.forEach(function (product) {
    removeProductFromCart(product.productId);
  })
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
let totalPaid = 0;
function pay(amount) { 
  // - amount is the money paid by customer
  // - pay will return a negative number if there is a remaining balance
  // - pay will return a positive number if money should be returned to customer

  // Add the amount to the totalPaid
  totalPaid += amount;
  // Calculate the remaining balance
  let remainingBal = totalPaid - cartTotal();
  // Check if there is a remaining balance and empty the cart if there is no remaining balance
  if (remainingBal >= 0) { 
    emptyCart();
    // Reset the totalPaid
    totalPaid = 0;
  }
  // Return the remaining balance
  return remainingBal;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
