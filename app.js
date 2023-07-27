const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [

  {
    id: 1,
    title: "Home",
    description: "As a guardian of unique water sources, Fiker Water is helping to protect natural aquifers around the world while bottling premium natural mineral waters and high-quality purified water.We're committed to creating a water positive impact everywhere we operate by 2025..",
  },
  {
    id: 2,
    title: "Ok Bottling and beverage Share Company",
    description: "Ok Bottling and beverage Share Company is a bottled water manufacturing company that is established, in 2014, in “Guraghe” zone, SNNP, Ethiopia. It mainly aims in targeting the Local Ethiopian market currently as well as most Eastern African region, in the long run thereby addressing the quality bottled water needs of this target segment. Quality water from the source coupled with the latest technology of production makes it unique to satisfy the real desire of its customers..",
  },
  {
    id: 3,
    title: "Our Productions",
    description: "Fikir Fresh Water is most ideal for drinking, cooking and social events. Our pure natural tasting water is guaranteed to quench anyone's thirst. Our cool, crisp, premium water will satisfy your water needs for any occasion. We also do tailor-made packaging to suit specific customer special needs. We have undertaken all Necessary precautions and processes and achieved the acceptable standards to ensure that you drink the best affordable, fresh, clean and refreshing water in in different sizes",
    price: 109,
  },
  {
    id: 4,
    title: "Delivery",
    description:"Fikir Natural Spring Waters provides prompt, reliable and personal service. We become familiar with all of our customers’ accounts so when you start service with us you will be assigned to a customer service representative as your main contact. Unlike most of our competitors, we don’t believe that you should be required to sign a long-term contract in order to enjoy our service. We feel that the quality of our water and service helps to set us apart from our competition.",
  },
  {
    id: 5,
    title: "Contact Us",
    description: "feel free to contact us anytime"
  },
  {
    id: 6,
    title: "Order",
    description: "your wish is our command, Order us today ",
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductDescription = document.querySelector(".productDescription");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductDescription.textContent = choosenProduct.description;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
