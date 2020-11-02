"use strict";

let menu = [
  {
    name: "Soda",
    category: "Drink",
    description: "Coke Products",
    price: 1.5,
  },
  {
    name: "Coffee",
    category: "Drink",
    description: "Regular or Decaf",
    price: 2.0,
  },
  {
    name: "Espresso",
    category: "Drink",
    description: "By the shot",
    price: 1.5,
  },
  {
    name: "Tea",
    category: "Drink",
    description: "Green or Black",
    price: 1.0,
  },
  {
    name: "Club",
    category: "Sandwich",
    description:
      "Turkey, bacon, lettuce, tomato, american cheese, and black garlic mayonnaise.",
    price: 7.5,
  },
  {
    name: "Corned Beef",
    category: "Sandwich",
    description: "Corned beef with swiss cheese on grilled rye",
    price: 6.5,
  },
  {
    name: "Tuna Melt",
    category: "Sandwich",
    description: "Tuna salad with American cheese on homemade grilled rye",
    price: 5.5,
  },
  {
    name: "BLT",
    category: "Sandwich",
    description: "Bacon, lettuce, tomato and mayonnaise on white toast",
    price: 4.5,
  },
  {
    name: "French Baguette",
    category: "Pastry",
    description: "Warm and fresh from the oven",
    price: 1.5,
  },
  {
    name: "Croissants",
    category: "Pastry",
    description: "Buttery puff pastry, perfect for breakfast!",
    price: 2.0,
  },
  {
    name: "Danish",
    category: "Pastry",
    description: "Raspberry filled with icing",
    price: 2.0,
  },
  {
    name: "Donut",
    category: "Pastry",
    description: "Iced cake-style",
    price: 1.5,
  },
  {
    name: "Chocolate Cake",
    category: "Dessert",
    description:
      "A rich velvety chocolate genoise sponge with a dark chocolate ganache, covered with a delicate strawberry sauce",
    price: 3.0,
  },
  {
    name: "Ice Cream Sundae",
    category: "Dessert",
    description:
      "True Vanilla Bean Ice Cream served with a chocolate ganache and crunchy peanut topping",
    price: 2.5,
  },
  {
    name: "Toffee Almond Bar",
    category: "Dessert",
    description: "The best damn dessert you’ll ever have. Guaranteed",
    price: 1.75,
  },
  {
    name: "Carrot Cake",
    category: "Dessert",
    description: "Carrot cake is good, actually!",
    price: 3.0,
  },
];
// console.log(menu);

let menuPopup = document.querySelector(".menu-popup");

let mainContainer = document.querySelector(".main-container");

let popup = document.querySelector(".popup");

let cartButton = document.querySelector(".cart-button");

let cartPopup = document.querySelector(".cart-popup");

let cartMenu = document.querySelector(".cart-menu");

let listOfItems = document.querySelector(".list-of-items");

let subtotalAmount = document.querySelector(".subtotal-amount");

let taxesAmount = document.querySelector(".taxes-amount");

let totalAmount = document.querySelector(".total-amount");

let cashPay = document.querySelector(".cash-pay");

let cardPay = document.querySelector(".card-pay");

let checkoutButton = document.querySelector(".checkout-button");

let cashFormContainer = document.querySelector(".cash-form-container");

let cardFormContainer = document.querySelector(".card-form-container");

let cashForm = document.querySelector(".cash-form");

let cardForm = document.querySelector(".card-form");

let change = document.querySelector(".change");

let changeButton = document.querySelector(".change-button");

let receipt = document.querySelector(".receipt");

let receiptButton = document.querySelector(".receipt-button");

let receiptPopup = document.querySelector(".receipt-popup");

let receiptListOfItems = document.querySelector(".receipt-list-of-items");

let receiptSubtotalAmount = document.querySelector(".receipt-subtotal-amount");

let receiptTaxesAmount = document.querySelector(".receipt-taxes-amount");

let receiptTotalAmount = document.querySelector(".receipt-total-amount");

let printButton = document.querySelector(".print-button");

let cartArray = [];
// console.log(cartArray);

let display = (category) => {
  menuPopup.innerHTML = "";
  let exitButton = document.createElement("button");
  let exitP = document.createElement("p");
  exitP.innerText = "Back to Menu";
  exitButton.classList.add("exit-button");
  exitP.classList.add("exit-text");
  exitButton.append(exitP);
  menuPopup.append(exitButton);
  menu.forEach((item) => {
    if (item.category === category) {
      let card = document.createElement("div");
      card.classList.add("card");
      let name = document.createElement("p");
      name.classList.add("food-name");
      name.innerText = item.name;
      let description = document.createElement("p");
      description.classList.add("food-description");
      description.innerText = item.description;
      let price = document.createElement("p");
      price.classList.add("food-price");
      let number = item.price;
      let roundedNumber = number.toFixed(2);
      price.innerText = `$${roundedNumber}`;
      let addToCartButton = document.createElement("button");
      let addToCartText = document.createElement("p");
      addToCartText.innerText = "Add to Cart";
      addToCartButton.classList.add("add-to-button");
      addToCartText.classList.add("add-to-text");
      addToCartButton.append(addToCartText);
      card.append(name, description, price, addToCartButton);
      menuPopup.append(card);
      card.addEventListener("click", () => {
        cartArray.push(item);
        // console.log(cartArray);
      });
    }
  });
};

let subtotal = 0;
let taxes = 0;
let total = 0;
let changeTotal = 0;
let cashTendered = 0;

let displayCart = () => {
  listOfItems.innerHTML = "";
  subtotal = 0;
  taxes = 0;
  total = 0;
    cartArray.forEach((item, index) => {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-list-item");
    let cartNameP = document.createElement("p");
    cartNameP.innerText = item.name;
    cartNameP.classList.add("cart-name");
    let cartPriceP = document.createElement("p");
    let price = item.price;
    let priceRounded = price.toFixed(2);
    cartPriceP.innerText = `$${priceRounded}`;
    cartPriceP.classList.add("cart-price");
    let itemDeleteButton = document.createElement("button");
    itemDeleteButton.classList.add("item-delete");
    itemDeleteButton.innerText = "X";
    itemDeleteButton.addEventListener("click", () => {
      cartArray.splice(index, 1);
      subtotal -= item.price;
      taxes = subtotal * 0.06;
      total = subtotal + taxes;
      refreshCart();
    });

    // CART MATH
    subtotal += item.price;
    subtotalAmount.innerText = `$${subtotal.toFixed(2)}`;
    taxes = subtotal * 0.06;
    taxesAmount.innerText = `$${taxes.toFixed(2)}`;
    total = subtotal + taxes;
    totalAmount.innerText = `$${total.toFixed(2)}`;
    cartItem.append(cartNameP, cartPriceP, itemDeleteButton);
    listOfItems.append(cartItem);

  });
};

const refreshCart = () => {
  listOfItems.innerHTML = "";
  subtotalAmount.innerText = `$${subtotal.toFixed(2)}`;
    taxesAmount.innerText = `$${taxes.toFixed(2)}`;
    totalAmount.innerText = `$${total.toFixed(2)}`;
  cartArray.forEach((item, index) => {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-list-item");
    let cartNameP = document.createElement("p");
    cartNameP.innerText = item.name;
    cartNameP.classList.add("cart-name");
    let cartPriceP = document.createElement("p");
    let price = item.price;
    let priceRounded = price.toFixed(2);
    cartPriceP.innerText = `$${priceRounded}`;
    cartPriceP.classList.add("cart-price");
    let itemDeleteButton = document.createElement("button");
    itemDeleteButton.classList.add("item-delete");
    itemDeleteButton.innerText = "X";
    itemDeleteButton.addEventListener("click", () => {
      cartArray.splice(index, 1);
      subtotal -= item.price;
      taxes = subtotal * 0.06;
      total = subtotal + taxes;
      refreshCart();
      console.log(cartArray);
    });
    
    cartItem.append(cartNameP, cartPriceP, itemDeleteButton);
    listOfItems.append(cartItem);
  });
};



mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-select")) {
    let categoryD = e.target.getAttribute("data-category");
    popup.classList.remove("hide");
    // console.log(categoryD);
    display(categoryD);
  }
});

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("exit-text")) {
    popup.classList.add("hide");
  }
});

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("exit-button")) {
    popup.classList.add("hide");
  }
});

cartButton.addEventListener("click", () => {
  cartPopup.classList.remove("hide");
  displayCart();
});

cartMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("exit-text")) {
    cartPopup.classList.add("hide");
  }
});

cartMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("exit-button")) {
    cartPopup.classList.add("hide");
  }
});

checkoutButton.addEventListener("click", () => {
  cashPay.classList.remove("hide");
  cardPay.classList.remove("hide");
});

cardPay.addEventListener("click", () => {
  cardFormContainer.classList.toggle("hide");
  cashPay.classList.toggle("hide");
});

cashPay.addEventListener("click", () => {
  cashFormContainer.classList.toggle("hide");
  cardPay.classList.toggle("hide");
});

cashForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let snapshot = new FormData(cashForm);
  cashTendered = snapshot.get("cash");
  changeTotal = cashTendered - total;
  changeTotal = changeTotal.toFixed(2);
  change.innerText = `Change - $${changeTotal}`;
  change.classList.remove("hide");
  receiptButton.classList.remove("hide");
  cashForm.classList.add("hide");
  cashForm.reset();
});

let last4 = "";
let cardReceiptItem = document.createElement("div");
let cashReceiptItem = document.createElement("div");

let displayReceipt = () => {
  cartArray.forEach((item) => {
    let receiptItem = document.createElement("div");
    receiptItem.classList.add("cart-list-item");
    let receiptNameP = document.createElement("p");
    receiptNameP.innerText = item.name;
    let receiptPriceP = document.createElement("p");
    let price = item.price;
    let priceRounded = price.toFixed(2);
    receiptPriceP.innerText = `$${priceRounded}`;
    receiptSubtotalAmount.innerText = `$${subtotal.toFixed(2)}`;
    receiptTaxesAmount.innerText = `$${taxes.toFixed(2)}`;
    receiptTotalAmount.innerText = `$${total.toFixed(2)}`;
    receiptItem.append(receiptNameP, receiptPriceP);
    receiptListOfItems.append(receiptItem);
  });
  if (last4.length > 0) {
    let cardReceiptP = document.createElement("p");
    cardReceiptP.classList.add("credit-card-text");
    cardReceiptP.innerText = `ACCT #:  ****************VISA ${last4}`;
    cardReceiptItem.append(cardReceiptP);
    receipt.append(cardReceiptItem);
    cashReceiptItem.innerHTML = "";
  } else {
    let cashReceiptP = document.createElement("p");
    cashReceiptP.classList.add("credit-card-text");
    let cashChangeReceiptP = document.createElement("p");
    cashChangeReceiptP.classList.add("credit-card-text");
    cashReceiptP.innerText = `Cash tendered - $${cashTendered}`;
    cashChangeReceiptP.innerText = `Change - $${changeTotal}`;
    cashReceiptItem.append(cashReceiptP, cashChangeReceiptP);
    receipt.append(cashReceiptItem);
    cardReceiptItem.innerHTML = "";
  }
};

const visaValidation = (cardNumber) => {
  let visaCheck = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if (cardNumber.match(visaCheck)) {
    return true;
  } else {
    return false;
  }
};

// console.log(visaValidation("4297658942156599"));

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let snapshot = new FormData(cardForm);
  let rawCardNumber = snapshot.get("card-number");
  let cardNumberString = rawCardNumber.toString();
  if (visaValidation(cardNumberString)) {
  last4 = cardNumberString.slice(-5, -1); 
  receiptButton.classList.remove("hide");
  cardForm.classList.add("hide");
  cardPay.classList.add("hide");
  cardForm.reset(); 
} else {
  alert("Not a valid card number");
  cardForm.reset();
}
});

receiptButton.addEventListener("click", () => {
  receiptPopup.classList.remove("hide");
  cartPopup.classList.add("hide");
  receiptButton.classList.add("hide");
  change.classList.add("hide");
  displayReceipt();
});

printButton.addEventListener("click", () => {
  receiptPopup.classList.add("hide");
  cartArray = [];
  // console.log(cartArray);
  receiptListOfItems.innerHTML = "";
  listOfItems.innerHTML = "";
  subtotal = 0;
  taxes = 0;
  total = 0;
  changeTotal = 0;
  cashTendered = 0;
  last4 = "";
  subtotalAmount.innerText = `$${subtotal.toFixed(2)}`;
  taxesAmount.innerText = `$${taxes.toFixed(2)}`;
  totalAmount.innerText = `$${total.toFixed(2)}`;
  receiptSubtotalAmount.innerText = "$0.00";
  receiptTaxesAmount.innerText = "$0.00";
  receiptTotalAmount.innerText = "$0.00";
  change.innerText = `Change - $${changeTotal}`;
  cashPay.classList.add("hide");
  cardForm.classList.remove("hide");
  cashForm.classList.remove("hide");
  cardFormContainer.classList.add("hide");
  cashFormContainer.classList.add("hide");
  cardReceiptItem.innerHTML = "";
  cashReceiptItem.innerHTML = "";
});
