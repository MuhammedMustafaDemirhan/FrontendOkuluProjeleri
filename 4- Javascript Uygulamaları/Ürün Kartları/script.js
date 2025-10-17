const productsDiv = document.getElementById("products");
console.log(productsDiv);

const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

storedProducts.forEach((product) => {
  productsDiv.innerHTML += `
    <div class="col-md-4">
    <div class="card shadow-sm h-100">
      <img
        src="${product.img}"
        alt="Ürün Resmi"
        class="card-img-top img-fluid"
        style="height: 200px; object-fit: cover"
      />
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text text-muted">${product.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold text-success fs-5">${product.price} TL</span>
          <button class="btn btn-primary btn-sm">Sepete Ekle</button>
        </div>
      </div>
    </div>
  </div>
    `;
});
