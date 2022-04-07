// CHANGING CSS USING JAVASCRIPT

document.body.style.background = "url('img/snow.jpg') no-repeat";

document.getElementsByTagName("h1")[0].innerHTML = "Make these flowers bloom";
document.getElementsByTagName("h1")[0].style.color = "cyan";

// make flowers bloom
let daisy = document.getElementById('daisy');
let rose = document.getElementById('rose');
daisy.src = "img/bloomed-daisy.jpg";
rose.src = "img/bloomed-rose.jpg";

// Add border to flowers section
let flowers = document.getElementById('flowers');
flowers.style.border = "6px dotted hotpink";

// Add margin to daisy
daisy.style.marginBottom = "3rem";

// Style the first flower
document.getElementsByTagName("img")[0].style.borderRadius = "10px";

// Style the second flower
let secondFlower = document.getElementsByTagName("img")[1];
secondFlower.style.borderRadius = "200px";
secondFlower.style.boxShadow = "6px 6px 100px lavender";