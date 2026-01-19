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



function renderProducts(page) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;

  const pageProducts = products.slice(start, end);

  pageProducts.forEach(p => {
    productList.innerHTML += `
      <div class="pro">
        <a href="sproduct.html?img=${p.image}&name=${encodeURIComponent(p.name)}&price=${p.price}">
          <img src="${p.image}">
        </a>
        <div class="des">
        <span>allen solly</span>
          <h5>${p.name}</h5>
         
           <div class="star">
            <i class="fas fa-star "></i>
             <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
          </div>
           <h4>$${p.price}</h4>
           

        </div>
      </div>
    `;
  });
}

renderProducts(currentPage);






