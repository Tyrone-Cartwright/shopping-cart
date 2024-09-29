// Object literal named products that contains an array of products
const products = [
    // Each product should have a name, price, quantity, productId, image
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

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
// Function to add a product to the cart
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
// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) { 
  // increaseQuantity should get the correct product based on the productId
  let product = products.find(product => product.productId === productId);
  // increaseQuantity should then increase the product's quantity
  product.quantity++;
}
// Function to decrease the quantity of a product in the cart
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
// Function to remove a product from the cart
function removeProductFromCart(productId) { 
  // removeProductFromCart should get the correct product based on the productId
  let product = products.find(product => product.productId === productId);
  // removeProductFromCart should update the product quantity to 0
  product.quantity = 0;
  // removeProductFromCart should remove the product from the cart
  cart.splice(cart.indexOf(product), 1);
}
// Function to get the total cost of all products in the cart
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
// Function to empty the cart
function emptyCart() { 
  // emptyCart should iterate through the cart and set the quantity of all products to 0
  cart.forEach(function (product) {
    removeProductFromCart(product.productId);
  })
}

let totalPaid = 0;
// Function to pay for the cart 
function pay(amount) {
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
