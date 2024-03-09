setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = (htime % 12) * 30 + mtime * 0.5;
    mrotation = (mtime % 60) * 6 + stime * 0.1;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
const btn = document.getElementById("btn");
const background = document.querySelector(".background");
const clock_background = document.querySelector("#circle");
const spans = document.querySelectorAll("#circle span");
const min = document.querySelector("#minute");
const hr = document.querySelector("#hour");

btn.addEventListener("change", function () {
    if (this.checked) {
        background.classList.add("show-background");
        clock_background.style.background = "#18191a";
        min.style.background = "#ffffff";
        hr.style.background = "#ffffff";


        spans.forEach(span => {
            span.style.color = "#ffffff"; // for can also be used
        });
    } else {
        background.classList.remove("show-background");
        clock_background.style.background = "#ffffff";
        min.style.background = "#18191a";
        hr.style.background = "#18191a";
        spans.forEach(span => {
            span.style.color = "#18191a"; // for can also be used
        });
    }
});