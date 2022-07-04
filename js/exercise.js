timer = document.getElementById("number").value;
button = document.getElementById("button");
let color;
let audio = new Audio("../src/note_E.mp3");
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


button.onclick = function(){
    if (button.value == "Start"){
        color = "palevioletred";
        document.body.style.backgroundColor = color;
        button.value = "Stop";
        document.getElementById("number_label").innerHTML = timer;
        count = setInterval(updateTimer, 1000);
    }
    else if (button.value == "Stop"){
        clearInterval(count);
        button.value = "Start";
        timer = document.getElementById("number").value;
        document.getElementById("number_label").innerHTML = 0;
    }
};

