import { a, b} from "./vars.js";
console.log(a,b);

const modal__window = document.querySelector('.modal__window');
setTimeout(() => {
   modal__window.style.display = "none"
}, 4000);