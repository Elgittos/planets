//Weight factor for these planets compared to earth

let mercury = 0.38;
let venus = 0.91;
let earth = 1.00;
let mars = 0.38;
let jupiter = 2.34;
let saturn = 1.06;
let uranus = 0.92;
let neptune = 1.19;
let pluto = 0.06;

let n1 = document.getElementById("num1");
let res1 = document.getElementById("result1");
let res2 = document.getElementById("result2");
let res3 = document.getElementById("result3");
let res4 = document.getElementById("result4");
let res5 = document.getElementById("result5");
let res6 = document.getElementById("result6");
let res7 = document.getElementById("result7");
let res8 = document.getElementById("result8");


document.getElementById("calculate1").addEventListener("click", function() {
res1.value = parseInt(n1.value)*mercury;
});

document.getElementById("calculate2").addEventListener("click", function() {
res2.value = parseInt(n1.value)*venus;
});

document.getElementById("calculate3").addEventListener("click", function() {
res3.value = parseInt(n1.value)*earth;
});

document.getElementById("calculate4").addEventListener("click", function() {
res4.value = parseInt(n1.value)*mars;
});

document.getElementById("calculate5").addEventListener("click", function() {
    res5.value = parseInt(n1.value)*jupiter;
});

document.getElementById("calculate6").addEventListener("click", function() {
    res6.value = parseInt(n1.value)*saturn;
});

document.getElementById("calculate7").addEventListener("click", function() {
    res7.value = parseInt(n1.value)*uranus;
});

document.getElementById("calculate8").addEventListener("click", function() {
    res8.value = parseInt(n1.value)*neptune;
});









