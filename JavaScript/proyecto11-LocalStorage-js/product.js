document.addEventListener("DOMContentLoaded", ready);

function ready() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const selected = document.querySelector("#selected-thumbnail");
  if (!thumbnails || !selected) return console.log("Error");

  // Iterar sobre los thumbnails y agregar el event listener
  thumbnails.forEach((item) => {
    item.addEventListener("click", (event) => {
      selected.src = event.target.src;
    });
  });

  // Recuperar los elementos adicionales
  const btnAddToCart = document.querySelector("#btn-add-to-cart");
  const inputQuantity = document.querySelector("#input-quantity");
  const priceEl = document.querySelector("#price");
  const descriptionEl = document.querySelector("#description");
  const titleEl = document.querySelector("#title");

  // Agregar el event listener al botón "Agregar al carrito"
  btnAddToCart.addEventListener("click", () => {
    const quantity = Number(inputQuantity.value);
    const description = descriptionEl.textContent;
    const title = titleEl.textContent;
    const price = parseCurrency(priceEl.textContent);
    const image = selected.src;
    const product = {
      quantity,
      description,
      title,
      price,
      image,
    };
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const titles = cart.map((item) => item.title);
    const isInCart = titles.includes(title);
    if (isInCart) {
      const newCart = cart.map((item) => {
        if (item.title === title) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else {
          return item;
        }
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
});

// Función para parsear el precio
function parseCurrency(text) {
    // Eliminar el símbolo del dólar y los puntos
    const numberString = text.replace(/\$|\.+/g, "");
    // Convertir a número
    return Number(numberString);
}
}