
import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFoundPage } from "./ui.js";


const params = new URLSearchParams(window.location.search);


const id = +params.get("id");

console.log(id);

document.addEventListener("DOMContentLoaded", async () => {

  const data = await fetchMenu();

  const product = data.find((item) => item.id === id);

  
  if (!product) {
    renderNotFoundPage(elements.detailPage);
  } else {
    renderDetailPage(product, elements.detailPage);
  }
});
