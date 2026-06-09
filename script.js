// Welcome Message
console.log("Assam Polytechnic Hub Loaded");

// Search Function
const searchBox = document.querySelector(".search-box");

if(searchBox){

searchBox.addEventListener("keyup", function(){

let filter = searchBox.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(filter)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});

}

// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(
".card,.resource-card,.update-card"
).forEach(el=>{

observer.observe(el);

});

// Dynamic Footer Year

const footer = document.querySelector("footer");

if(footer){

let year = new Date().getFullYear();

footer.innerHTML +=
`<p style="margin-top:10px;">© ${year} Assam Polytechnic Hub</p>`;

}

// Loading Effect

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// Back To Top Button

const btn = document.createElement("button");

btn.innerHTML="↑";

btn.id="topBtn";

document.body.appendChild(btn);

btn.style.position="fixed";
btn.style.bottom="20px";
btn.style.right="20px";
btn.style.width="50px";
btn.style.height="50px";
btn.style.border="none";
btn.style.borderRadius="50%";
btn.style.background="#60a5fa";
btn.style.color="white";
btn.style.fontSize="20px";
btn.style.cursor="pointer";
btn.style.display="none";
btn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

btn.style.display="block";

}
else{

btn.style.display="none";

}

});

btn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});
