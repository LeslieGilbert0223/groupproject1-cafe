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
console.log(menu);

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
        console.log(cartArray);
      });
    }
  });
};

let subtotal = 0;
let taxes = 0;
let total = 0;

let displayCart = () => {
  cartArray.forEach((item) => {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-list-item");
    let cartNameP = document.createElement("p");
    cartNameP.innerText = item.name;
    let cartPriceP = document.createElement("p");
    let price = item.price;
    let priceRounded = price.toFixed(2);
    cartPriceP.innerText = `$${priceRounded}`;
    // CART MATH
    subtotal += item.price;
    subtotalAmount.innerText = `$${subtotal.toFixed(2)}`;
    taxes = subtotal * 0.06;
    taxesAmount.innerText = `$${taxes.toFixed(2)}`;
    total = subtotal + taxes;
    totalAmount.innerText = `$${total.toFixed(2)}`;
    cartItem.append(cartNameP, cartPriceP);
    listOfItems.append(cartItem);
  });
};

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-category")) {
    let categoryD = e.target.getAttribute("data-category");
    popup.classList.remove("hide");
    console.log(categoryD);
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
