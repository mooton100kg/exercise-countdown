let show = false;
let d = document.getElementsByClassName("d");

function exercise_f() {
    window.location.href = "html/exercise.html";
}

function study_f() {
    if (d[0].style.display === "block"){
        for (let i = 0; i < d.length; i++){
            d[i].style.display = "none";
        }
    }
    else {
        for (let i = 0; i < d.length; i++){
            d[i].style.display = "block";
        }
    }
}