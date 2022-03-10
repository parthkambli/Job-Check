
// Filter responsive
var Filter = document.getElementById('Filter-col');
var Filter_btn = document.getElementById('Filter-btn');
function MyFilter(ScreenSize) {
    if (ScreenSize.matches) { // If media query matches
        Filter.classList.add('Filter-hide');
        Filter_btn.classList.remove('Filter-btn-hide');
    } else {
        Filter.classList.remove('Filter-hide');
        Filter_btn.classList.add('Filter-btn-hide');
    }
}

var ScreenSize = window.matchMedia("(max-width: 767px)")
MyFilter(ScreenSize) // Call listener function at run time
ScreenSize.addListener(MyFilter) // Attach listener function on state changes


// Experience
var Ex_Slider = document.getElementById("Ex-slider");
var Ex_Value = document.getElementById("Ex-value");
Ex_Value.innerHTML = Ex_Slider.value

Ex_Slider.oninput = function () {
    Ex_Value.innerHTML = this.value;
}
// OffCanvas Experience
var O_Ex_Slider = document.getElementById("O-Ex-slider");
var O_Ex_Value = document.getElementById("O-Ex-value");
O_Ex_Value.innerHTML = O_Ex_Slider.value

O_Ex_Slider.oninput = function () {
    O_Ex_Value.innerHTML = this.value;
}


// Salary
var Sal_Slider = document.getElementById("Sal-slider");
var Sal_Value = document.getElementById("Sal-value");
Sal_Value.innerHTML = Sal_Slider.value

Sal_Slider.oninput = function () {
    Sal_Value.innerHTML = this.value;
}

// OffCanvas Salary
var O_Sal_Slider = document.getElementById("O-Sal-slider");
var O_Sal_Value = document.getElementById("O-Sal-value");
O_Sal_Value.innerHTML = O_Sal_Slider.value

O_Sal_Slider.oninput = function () {
    O_Sal_Value.innerHTML = this.value;
}