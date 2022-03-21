// Coupon

function loadCoupon() {
    document.getElementById('coupon').style.visibility = 'visible'
}

function closeCoupon() {
    document.getElementById('coupon').style.visibility = 'hidden'
}


// Theam Dark / Light mode
function MyTheam() {
    document.body.classList.toggle('darkmode');
    var ModeBtn = document.getElementById("Mode-btn");
    ModeBtn.classList.toggle("btn-light");
    ModeBtn.classList.toggle("btn-dark");
    if (ModeBtn.innerHTML === "Dark Mode") {
        ModeBtn.innerHTML = "Light Mode";
    }
    else {
        ModeBtn.innerHTML = "Dark Mode";
    }
}
