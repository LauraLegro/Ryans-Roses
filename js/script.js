var available = document.querySelector("h3");
var mainTitle = document.querySelector(".main-title");
var firstItem = document.querySelector("ul li");
// let intro = document.querySelector(".intro p")
var intro = document.querySelector(".intro p");
intro.style.color = "hotpink";
console.log(intro.outerHTML);

var firstImg = document.querySelector("img");
firstImg.src = "img/lulu.jpeg";
firstImg.alt = "Lulu bouquet";
console.log(firstImg.outerHTML);

var firstCaption = document.querySelector("figcaption");
firstCaption.innerText = "The Lulu";

firstCaption.innerHTML = "The <strong>Lulu</strong>";
console.log(firstCaption.innerHTML);

var intro = document.querySelector(".intro p");
intro.innerHTML = 'Available <span class="increase__size">today</span>';

var attention = document.querySelector(".increase__size");
attention.style.fontSize = "2.5em";
