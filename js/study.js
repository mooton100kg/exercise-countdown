let selector = document.getElementById("selector");
let iframe = document.getElementById("iframe");

selector.onchange = function(){
    var s = selector.value;
    if (s == "all")
        iframe.src = "../src/all.pdf"
    else if (s == "year1")
        iframe.src = "../src/year1.pdf"
    else if (s == "des")
        iframe.src = "../src/des.pdf"

}