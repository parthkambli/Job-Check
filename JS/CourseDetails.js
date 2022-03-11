var show = document.getElementById("Show-more");
var show_btn = document.getElementById("Show-btn");
function ShowMore(){
    show.classList.toggle("Show-less");
    if(show_btn.innerHTML === "Show More"){
        show_btn.innerHTML = "Show Less";
    }
    else{
        show_btn.innerHTML = "Show More";
    }
}

var Heart = document.getElementById("heart");
function Like(){
    Heart.classList.toggle("fa-regular");
    Heart.classList.toggle("fa-solid");
    Heart.classList.toggle("Red-Heart");
}