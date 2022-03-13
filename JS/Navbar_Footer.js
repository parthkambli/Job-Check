
// Nav-on_Toggle

function changeNav() {
    var myNav = document.getElementById("NavBar");
    var PostBtn = document.getElementById("Post-btn");
    var SignupBtn = document.getElementById("Signup-btn")
    myNav.classList.toggle('Nav-on-toggle');
    PostBtn.classList.toggle("Post-btn-position");
    PostBtn.classList.toggle("my-2");
    SignupBtn.classList.toggle("Signup-btn-position");
    SignupBtn.classList.toggle("my-2");
}


// Nav-on-Scrool

var Nav = document.getElementById("NavBar");
window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 100) {
        Nav.classList.add('Nav-on-scroll');
    }
    else {
        Nav.classList.remove('Nav-on-scroll');
    }
});

