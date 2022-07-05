timer = document.getElementById("number").value;
let count, color;

function updateTimer(){
    timer--;
    if (timer <= 0 && color == "#333"){
        timer = 3;
        color = "rgb(200, 200, 200)";
        document.body.style.backgroundColor = color;
    }
    else if (timer <= 0 && color == "rgb(200, 200, 200)"){
        timer = document.getElementById("number").value;
        color = "#333";
        document.body.style.backgroundColor = color;
    }
    document.getElementById("number_label").innerHTML = timer;
}

function start(){
    var button = document.getElementById("start");
    if (button.innerText == "START"){
        color = "#333";
        document.body.style.backgroundColor = color;
        button.innerText = "STOP";
        document.getElementById("number_label").innerHTML = timer;
        count = setInterval(updateTimer, 1000);
    }
    else if (button.innerText == "STOP"){
        clearInterval(count);
        button.innerText = "START";
        timer = document.getElementById("number").value;
        document.getElementById("number_label").innerHTML = 0;
    }
};

