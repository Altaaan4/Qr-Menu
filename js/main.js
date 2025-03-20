import fetchMenu from "./api.js";
import { elements, renderCard } from "./ui.js";



document.addEventListener("DOMContentLoaded", async () => {

  const data = await fetchMenu();

  
  renderCard(data);

  
  elements.inputs.forEach((input) => {
   
    input.addEventListener("change", () => {
     
      const selected = input.id;

      console.log(selected);

     
      if (selected === "all") {
        renderCard(data);
      } else {
        
        const filtred = data.filter((item) => item.category == selected);

       
        renderCard(filtred);
      }
    });
  });
});
