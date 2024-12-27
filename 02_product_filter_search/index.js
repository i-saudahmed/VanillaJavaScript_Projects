let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
  ],
};

products.data.forEach((curElem) => {
  console.log(curElem.productName);

  let card = document.createElement("div");
  card.classList.add("card", curElem.category, "hide");

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", curElem.image);

  imageContainer.appendChild(image);

  card.appendChild(imageContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = curElem.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "Rs. " + curElem.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
});

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach((curElem) => {
    if (value.toUpperCase() == curElem.innerText.toUpperCase()) {
      curElem.classList.add("active");
    } else {
      curElem.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((curElem) => {
    if (value == "all") {
      curElem.classList.remove("hide");
    } else {
      if (curElem.classList.contains(value)) {
        curElem.classList.remove("hide");
      } else {
        curElem.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document
    .getElementById("search-input")
    .value.trim()
    .toUpperCase();
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  console.log(searchInput);

  elements.forEach((curElem, curIndex) => {
    if (curElem.innerText.includes(searchInput)) {
      cards[curIndex].classList.remove("hide");
    } else {
      cards[curIndex].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};
