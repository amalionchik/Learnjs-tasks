button.addEventListener("click", () => alert("1")); // запустится

button.removeEventListener("click", () => alert("1")); // запустится

button.onclick = () => alert(2); // не запустится



