const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.onclick = () => {
    nav.classList.add("active");
  };
}

if (close) {
  close.onclick = () => {
    nav.classList.remove("active");
  };
}

const addCartButtons = document.querySelectorAll(".normal");

addCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const product = {
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image,
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");
  });
});



console.log("menu script loaded");
cart.forEach(item => {
  console.log(item.image); // ✅ valid
});
