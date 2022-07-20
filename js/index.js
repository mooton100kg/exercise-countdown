let d = document.getElementsByClassName("d");

function exercise_f() {
    window.location.href = "html/exercise.html";
}

const select = document.getElementById('dowload');

function change(obj) {
    var value = obj.value;

    if (value == "allDoc")
        window.open("https://drive.google.com/file/d/1C8LjyhcLhfoimBOIFOj5-iHrgMLAw4jO/view?usp=sharing");
    else if (value == "detail")
        window.open("https://drive.google.com/file/d/1R4NwbsaT5kWMue3DUNxp63QzAuTdlYXG/view?usp=sharing");
    else if (value == "year1")
        window.open("https://drive.google.com/file/d/1iKXDr0aig61uG7A-GFg0IHAS5MK5oOQF/view?usp=sharing");
    else if (value == "calendar65")
        window.open("https://drive.google.com/file/d/1ABf7oubU26y5uqLImd9M9c9PTcV8H6Ob/view?usp=sharing");
    else if (value == "ge")
        window.open("https://drive.google.com/file/d/1eqSSNEBikWc2dl5D6tF54V8Iezvsrutp/view?usp=sharing");
    else if (value == "timeTable")
        window.open("https://drive.google.com/file/d/19XUvuLATvzRwu7Vt4llwVN_kgRKmYVrf/view?usp=sharing");
    document.getElementById("l").innerHTML = value;
};

class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();
        setInterval(() => {
            this.update();
        }, 1000);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const ampm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = ampm;
    }

    getTimeParts(){
        const now = new Date();
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}

const ClockElement = document.querySelector(".clock");
const ClockObject = new DigitalClock(ClockElement);


ClockObject.start();