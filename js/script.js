import { a, b} from "./vars.js";
console.log(a,b);

const modal__window = document.querySelector('.modal__window');
setTimeout(() => {
   modal__window.style.display = "none"
}, 4000);

const modalMain = document.querySelector('.modal__main');
const wrapper = document.querySelector('.wrapper');

const enterBlock = document.querySelector('.enter-block');
enterBlock.addEventListener("click",()=>{
   modalMain.style.display = "block";
   wrapper.style.display = "none"
})