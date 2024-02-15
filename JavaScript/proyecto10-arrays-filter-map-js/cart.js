const cart = [
    {
        title: "MacBook Pro 13'4",
        description:
            "MacBook Pro 13'4 con 8GB de RAM y 512GB de almacenamiento",
        price: 750000,
        quantity: 1,
        image: "../img/mock1.jpg",
    },
    {
        title: "MacBook Pro 15'4",
        description:
            "MacBook Pro 15'4 con 8GB de RAM y 512GB de almacenamiento",
        price: 800000,
        quantity: 2,
        image: "../img/mock1.jpg",
    },
    {
        title: "Lenovo",
        description: "Lenovo 13'4 con 8GB de RAM y 256GB de almacenamiento",
        price: 75000,
        quantity: 1,
        image: "../img/mock1.jpg",
    },
];

document.addEventListener("DOMContentLoaded", () => populate(cart));
function populate(cart) {
  const cartContainer = document.querySelector(".cart-container");
  document.querySelector(".products")?.remove();
  if (!cartContainer) return console.log("Error");
  const productContainer = document.createElement("div");
  productContainer.classList.add("card", "products");
  cart.forEach((product) => {
    const productElement = document.createElement("article");
    productElement.classList.add("product-cart");
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.title;
    const productMiddle = document.createElement("div");
    productMiddle.classList.add("middle");
    const productInfo = document.createElement("div");
    productInfo.classList.add("info");
    const productTitle = document.createElement("strong");
    productTitle.classList.add("title");
    productTitle.textContent = product.title;
    const productDescription = document.createElement("span");
    productDescription.classList.add("description");
    productDescription.textContent = product.description;
    const productInput = document.createElement("input");
    productInput.type = "number";
    productInput.value = product.quantity;
    productInput.min = 1;
    productInput.addEventListener("change", (event) => {
      const { value } = event.target;
      const index = cart.findIndex(({ title }) => product.title === title);
      if (index < 0) return console.log("Error");
      cart[index].quantity = value;
      renderTotalPrice(cart);
    });
    const productPrice = document.createElement("strong");
    productPrice.classList.add("price");
    productPrice.textContent = `AR$ ${formatPrice(product.price)}`;
    productInfo.appendChild(productTitle);
    productInfo.appendChild(productDescription);
    productMiddle.appendChild(productInfo);
    productMiddle.appendChild(productInput);
    productElement.appendChild(productImage);
    productElement.appendChild(productMiddle);
    productElement.appendChild(productPrice);
    productContainer.appendChild(productElement);
  });
  cartContainer.insertAdjacentElement("afterbegin", productContainer);
  renderTotalPrice(cart);
}
function renderTotalPrice(cart) {
  const priceElement = document.querySelector(".resume .price");
  priceElement.textContent = formatPrice(
    cart.reduce((total, { price, quantity }) => total + price * quantity, 0)
  );
}
function formatPrice(price) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(price);
}




const form = document.querySelector("#filter-form"); // `#` es el selector CSS para los `id`.
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = event.target.search.value; 
  const filteredCart = cart.filter((item) =>
    item.title.toLowerCase().includes(userInput.toLowerCase())
  );
  populate(filteredCart);
});


const btnDiscount = document.querySelector("#btn-discount");
/*btnDiscount.addEventListener("click", () => {
  const cartWithDiscount = cart.map((item) => {
    return {
      ...item,
      price: item.price * 0.9,
    };
  });
  populate(cartWithDiscount);
});*/
btnDiscount.addEventListener("click", () => {
  const cartWithDiscount = cart.map((item) => {
    // Verificar si el precio del producto es mayor a AR $500.000
    if (item.price > 500000) {
      return {
        ...item,
        price: item.price * 0.9, // Aplicar descuento del 10%
      };
    } else {
      return item; // Si el precio no es mayor a AR $500.000, mantener el mismo precio
    }
  });
  populate(cartWithDiscount); // Llamar a la función populate con el carrito actualizado
});