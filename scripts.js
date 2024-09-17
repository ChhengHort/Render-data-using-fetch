// then
// fetch("https://api.escuelajs.co/api/v1/products/")
// .then(res => res.json())
// .then(data => console.log(data))

// async/await
// const getData = async () => {
//     try {
//         const response = await fetch("https://api.escuelajs.co/api/v1/products/");
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData()

// or

import { cardComponent } from "./cardComponent.js";

let renderArea = document.querySelector("#render-area");

let BASE_URL = "https://api.escuelajs.co/api/v1/";
// async/await
// Products
const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}products`);
    const data = await response.json();
    console.log("Products ", data);
  } catch (error) {
    console.log(error);
  }
};
getProducts();

// Category
const getCategory = async () => {
  try {
    const response = await fetch(`${BASE_URL}categories`);
    const data = await response.json();
    console.log("Category ", data);
  } catch (error) {
    console.log(error);
  }
};
getCategory();

// User
const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Users ", data);
    data.map((user) => {
      renderArea.innerHTML += cardComponent(user);
    });
  } catch (error) {
    console.log(error);
  }
};
getUsers();
