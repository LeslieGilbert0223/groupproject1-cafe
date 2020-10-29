"use strict";

let menu = [
    {
        name: "Soda",
        category: "Drink",
        description: "Coke Products",
        price: 1.50,
    },
    {
        name: "Coffee",
        category: "Drink",
        description: "Regular or Decaf",
        price: 2.00,
    },
    {
        name: "Espresso",
        category: "Drink",
        description: "By the shot",
        price: 1.50,
    },
    {
        name: "Tea",
        category: "Drink",
        description: "Green or Black",
        price: 1.00,
    },
    {
        name: "Club",
        category: "Sandwich",
        description: "Turkey, bacon, lettuce, tomato, american cheese, and black garlic mayonnaise.",
        price: 7.50,
    },
    {
        name: "Corned Beef",
        category: "Sandwich",
        description: "Corned beef with swiss cheese on grilled rye",
        price: 6.50,
    },
    {
        name: "Tuna Melt",
        category: "Sandwich",
        description: "Tuna salad with American cheese on homemade grilled rye",
        price: 5.50,
    },
    {
        name: "BLT",
        category: "Sandwich",
        description: "Bacon, lettuce, tomato and mayonnaise on white toast",
        price: 4.50,
    },
    {
        name: "French Baguette",
        category: "Pastry",
        description: "Warm and fresh from the oven",
        price: 1.50,
    },
    {
        name: "Croissants",
        category: "Pastry",
        description: "Buttery puff pastry, perfect for breakfast!",
        price: 2.00,
    },
    {
        name: "Danish",
        category: "Pastry",
        description: "Raspberry filled with icing",
        price: 2.00,
    },
    {
        name: "Donut",
        category: "Pastry",
        description: "Iced cake-style",
        price: 1.50,
    },
    {
        name: "Chocolate Cake",
        category: "Dessert",
        description: "A rich velvety chocolate genoise sponge with a dark chocolate ganache, covered with a delicate strawberry sauce",
        price: 3.00,
    },
    {
        name: "Ice Cream Sundae",
        category: "Dessert",
        description: "True Vanilla Bean Ice Cream served with a chocolate ganache and crunchy peanut topping",
        price: 2.50,
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
        price: 3.00,
    },
];
console.log(menu);

let menuPopup = document.querySelector(".menu-popup");

let mainContainer = document.querySelector(".main-container");

let popup = document.querySelector(".popup");

let display = (category) =>{
    menuPopup.innerHTML = "";
    menu.forEach((item)=>{
        if(item.category===category){
            let card =document.createElement("div");
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
            price.innerText = `$${roundedNumber}`
            card.append(name, description, price);
            menuPopup.append(card);
        };
    });
};

mainContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("menu-category")){
        let categoryD = e.target.getAttribute("data-category");
        popup.classList.remove("hide");
        console.log(categoryD);
        display(categoryD);
    };
});

