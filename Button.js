const colorSwatches = document.querySelectorAll('.color-swatch');
const content = document.getElementById('content');

colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        const color = swatch.style.backgroundColor;
        content.style.backgroundColor = color;
    });
});


const colorBtn = document.getElementById("colorBtn");
 const viewports = document.querySelector(".viewport");

 colorBtn.addEventListener('click', function(){

    viewports.classList.toggle("open");
 })









const moonBtn = document.getElementById("moonBtn");
const container = document.querySelector(".content");

moonBtn.addEventListener("click", function () {
    container.classList.toggle("dark-mode");
});
