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

function d_one() {
    window.open("https://drive.google.com/file/d/1C8LjyhcLhfoimBOIFOj5-iHrgMLAw4jO/view?usp=sharing");
}
function d_two() {
    window.open("https://drive.google.com/file/d/1iKXDr0aig61uG7A-GFg0IHAS5MK5oOQF/view?usp=sharing");
}
function d_three() {
    window.open("https://drive.google.com/file/d/1R4NwbsaT5kWMue3DUNxp63QzAuTdlYXG/view?usp=sharing");
}

