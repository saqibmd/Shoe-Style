const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },

  {
    id: 3,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },

  {
    id: 4,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },

  {
    id: 5,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImage = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((items, index) => {
  items.addEventListener("click", () => {
    // Change the current slide based on user clicked on the menu

    wrapper.style.transform = `translateX(-${index * 100}vw)`;

    // Change the product based on user clicked on the menu

    chosenProduct = products[index];

    // Change texts of currentProduct
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = `$${chosenProduct.price}`;
    currentProductImage.src = chosenProduct.colors[0].img;

    // Assign the new colors
    currentProductColors.forEach((color, index) =>{
      color.style.backgroundColor = chosenProduct.colors[index].code;
    })
  });
});


currentProductColors.forEach((color, index) =>{
  color.addEventListener("click", ()=>{
    currentProductImage.src = chosenProduct.colors[index].img;
  })
})

currentProductSizes.forEach((size, index) =>{
  size.addEventListener("click", ()=>{
    currentProductSizes.forEach((size) =>{
      size.style.backgroundColor = "white"
      size.style.color = "black"
    })
    size.style.backgroundColor = "black"
    size.style.color = "white"
  })
})

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
})

close.addEventListener('click', () => {
  payment.style.display = 'none';
})