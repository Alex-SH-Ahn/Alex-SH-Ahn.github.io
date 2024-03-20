const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button3_1 = document.getElementById('3_1');
const button3_2 = document.getElementById('3_2');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');

var location1 = document.getElementById("intro1");
var location2 = document.getElementById("activity2");
var location3 = document.getElementById("ilike3");
var location3_1 = document.getElementById("ilike31");
var location3_2 = document.getElementById("idont32");
var location4 = document.getElementById("music4");
var location5 = document.getElementById("incident5");

const up = document.getElementById('up');
const down = document.getElementById('down');

up.addEventListener('click', function() {
    console.log("up clicked");
    window.scrollTo({top: 0, behavior: 'smooth'});
})
down.addEventListener('click', function() {
    console.log("down clicked");
    window.scrollTo({top: 999999, behavior: 'smooth'});
})

button1.addEventListener('click', function() {
    console.log("button1 clicked");
    window.scrollTo({top: location1.getBoundingClientRect().top - 100, behavior: 'smooth'});
})

button2.addEventListener('click', function() {
    console.log("button2 clicked");
    window.scrollTo({top: location2.getBoundingClientRect().top - 100, behavior: 'smooth'});
})

button3.addEventListener('click', function() {
    console.log("button3 clicked");
    window.scrollTo({top: location3.getBoundingClientRect().top - 100, behavior: 'smooth'});
})

button3_1.addEventListener('click', function() {
    console.log("button3_1 clicked");
    window.scrollTo({top: location3_1.getBoundingClientRect().top - 100, behavior: 'smooth'});
})

button3_2.addEventListener('click', function() {
    console.log("button3_2 clicked");
    window.scrollTo({top: location3_2.getBoundingClientRect().top - 100, behavior: 'smooth'});
})

button4.addEventListener('click', function() {
    console.log("button4 clicked");
    window.scrollTo({top: location4.getBoundingClientRect().top - 100, behavior: 'smooth'});
})

button5.addEventListener('click', function() {
    console.log("button3 clicked");
    window.scrollTo({top: location5.getBoundingClientRect().top - 100, behavior: 'smooth'});
})