

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


// Turnover
var Slider = document.getElementById("slider");
var Value = document.getElementById("T-value");
Value.innerHTML = Slider.value

Slider.oninput = function(){
    Value.innerHTML = this.value;
}
// OffCanvas Turnover
var O_Slider = document.getElementById("O-slider");
var O_Value = document.getElementById("O-T-value");
O_Value.innerHTML = O_Slider.value

O_Slider.oninput = function(){
    O_Value.innerHTML = this.value;
}
