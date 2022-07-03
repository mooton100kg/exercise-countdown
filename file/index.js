timer = document.getElementById("number").value;
let color;
let audio = new Audio("note_E.mp3");
let count;

function updateTimer(){
    timer--;
    if (timer <= 0 && color == "palevioletred"){
        audio.play();
        timer = 3;
        color = "greenyellow";
        document.body.style.backgroundColor = color;
    }
    else if (timer <= 0 && color == "greenyellow"){
        audio.play();
        timer = document.getElementById("number").value;
        color = "palevioletred";
        document.body.style.backgroundColor = color;
    }
    document.getElementById("number_label").innerHTML = timer;
}


document.getElementById("b_start").onclick = function(){
    color = "palevioletred";
    document.body.style.backgroundColor = color;
    document.getElementById("b_start").hidden = true;
    document.getElementById("b_stop").hidden = false;
    document.getElementById("number_label").innerHTML = timer;
    count = setInterval(updateTimer, 1000);
};

document.getElementById("b_stop").onclick = function(){
    clearInterval(count);
    document.getElementById("b_start").hidden = false;
    document.getElementById("b_stop").hidden = true;
    timer = document.getElementById("number").value;
    document.getElementById("number_label").innerHTML = 0;
}

