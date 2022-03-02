
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

