function go() {
   showCircle(150, 150, 100).then((div) => {
      div.append("Hello, world!");
      div.classList.add("message");
   });
}

const showCircle = (xCord, yCord, rad) => {
   let div = document.createElement("div");

   div.style.width = 0;
   div.style.height = 0;
   div.style.left = `${xCord}px`;
   div.style.top = `${yCord}px`;
   div.className = "circle";

   document.body.append(div);

   return new Promise((res) => {
      setTimeout(() => {
         div.style.width = `${rad * 2}px`;
         div.style.height = `${rad * 2}px`;

         div.addEventListener("transitionend", function handler() {
            div.removeEventListener("transitionend", handler);
            res(div);
         });
      }, 0);
   });
};
