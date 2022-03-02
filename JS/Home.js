
// Nav-on_Toggle

function changeNav(){
    var myNav = document.getElementById("NavBar");
    myNav.classList.toggle('Nav-on-toggle');  
}

// Nav-on-Scrool

var Nav = document.getElementById("NavBar");
window.addEventListener('scroll', function(){
    if (this.window.pageYOffset > 100){
        Nav.classList.add('Nav-on-scroll');
    }
    else{
        Nav.classList.remove('Nav-on-scroll');
    }
});

// var mq = window.matchMedia("(max-width: 425px)");
var Backgroun = document.getElementById("Bg-img");
if ($(window).width()>=425) {
    // window width is at less than 425px
    Backgroun.classList.remove("vh-100");
    Backgroun.style.height = "300px";
}
else {
    // window width is greater than 425px
    Backgroun.classList.add("vh-100")
}

// {/* <script type="text/javascript">
//     var nav = document.querySelector('nav');

//     window.addEventListener('scroll', function () {
//         if (window.pageYOffset > 100) {
//         nav.classList.add('bg-dark', 'shadow');
//         } else {
//         nav.classList.remove('bg-dark', 'shadow');
//         }
//       });
// </script> */}

// function changeMode(){
//     var myBody = document.body;
//     myBody.classList.toggle('darkmod')
// }

