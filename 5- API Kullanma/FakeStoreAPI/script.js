const loadProducts = document.getElementById("load-products");
const productsDiv = document.getElementById("products");
const cart = document.getElementById("cart");

let cartArray = [];
let productMap = {};
let cartCount = 0;

loadProducts.addEventListener("click", function (e) {
  e.preventDefault();
  productsDiv.innerHTML = "";

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => {
        productMap[product.id] = product;

        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 col-12 mb-4";

        const card = document.createElement("div");
        card.className = "card h-100";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = "Ürün fotoğrafı.";
        img.className = "card-img-top img-fluid";
        img.style.height = "200px";
        img.style.objectFit = "contain";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.innerHTML = `
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <p class="text-muted"><small>Kategori: ${product.category}</small></p>
          <p class="fw-bold">$${product.price}</p>
        `;

        const button = document.createElement("button");
        button.className = "btn btn-primary";
        button.textContent = "Add to Cart";

        button.addEventListener("click", () => {
          const existing = cartArray.find(
            (item) => item.productId === product.id
          );
          if (existing) {
            existing.quantity += 1;
          } else {
            cartArray.push({ productId: product.id, quantity: 1 });
            cartCount += 1;
            updateCartCount();
          }
        });

        cardBody.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        productsDiv.appendChild(col);
      });
    })
    .catch((err) => console.error(err));
});

cart.addEventListener("click", () => {
  updateCartModal();
  const modal = new bootstrap.Modal(document.getElementById("cartModal"));
  modal.show();
});

function updateCartModal() {
  const modalBody = document.getElementById("cart-items-modal");
  modalBody.innerHTML = "";

  if (cartArray.length === 0) {
    modalBody.textContent = "Sepetiniz boş.";
    return;
  }

  let total = 0;

  cartArray.forEach((item) => {
    const product = productMap[item.productId];
    total += product.price * item.quantity;

    const div = document.createElement("div");
    div.className =
      "d-flex justify-content-between align-items-center border-bottom mb-2 pb-2";

    const infoDiv = document.createElement("div");
    infoDiv.style.flex = "1";
    infoDiv.innerHTML = `<strong>${product.title}</strong> - $${product.price} x ${item.quantity}`;

    const buttonsDiv = document.createElement("div");

    const minus = document.createElement("button");
    minus.className = "btn btn-sm btn-secondary me-1";
    minus.textContent = "-";
    minus.addEventListener("click", () => {
      item.quantity -= 1;
      if (item.quantity === 0) {
        cartArray = cartArray.filter((i) => i.productId !== item.productId);
        cartCount -= 1;
        updateCartCount();
      }
      updateCartModal();
    });

    const plus = document.createElement("button");
    plus.className = "btn btn-sm btn-secondary me-1";
    plus.textContent = "+";
    plus.addEventListener("click", () => {
      item.quantity += 1;
      updateCartModal();
    });

    const remove = document.createElement("button");
    remove.className = "btn btn-sm btn-danger";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      cartArray = cartArray.filter((i) => i.productId !== item.productId);
      cartCount -= 1;
      updateCartCount();
      updateCartModal();
    });

    buttonsDiv.appendChild(minus);
    buttonsDiv.appendChild(plus);
    buttonsDiv.appendChild(remove);

    div.appendChild(infoDiv);
    div.appendChild(buttonsDiv);
    modalBody.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.className = "mt-3 fw-bold text-end";
  totalDiv.textContent = `Toplam: $${total.toFixed(2)}`;
  modalBody.appendChild(totalDiv);
}

function updateCartCount() {
  const countSpan = document.getElementById("cart-count");
  countSpan.textContent = cartCount;
}
