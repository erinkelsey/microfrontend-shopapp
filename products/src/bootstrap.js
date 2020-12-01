import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

/**
 * Context/Situation #1:
 *
 * We are running this file in development in ISOLATION.
 * We are using our local index.html file, which DEFINITELY has an
 * element with an id of 'dev-products'.
 *
 * We want to immediately render the app into the element.
 */
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming our container app does not have an element
  // with id 'dev-products' ...
  if (el) {
    mount(el); // probably running in isolation
  }
}

/**
 * Context/Situation #2:
 *
 * We are running this file in development or production through the
 * CONTAINER app.
 *
 * NO GUARANTEE that an element with an id of 'dev-products' exists.
 *
 * WE DO NOT WANT to try to immediately render the app.
 */
export { mount };
