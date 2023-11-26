const hour_el = document.getElementById("hour");
const minute_el = document.getElementById("minutes");
const second_el = document.getElementById("seconds");
const amp_el = document.getAnimations("ampm");

function updated(){
   let hours = new Date().getHours();
   let minute = new Date().getMinutes();
   let second = new Date().getSeconds();
   let pm = "AM";

    if (hours > 12) {
        hours = hours -12 ;
        pm = "MP";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    hour_el.innerText = hours;
    minute_el.innerText = minute;
    second_el.innerText = second;
    amp_el.innerText = pm;
   
setTimeout(() => {
    updated();
}, 1000);

}

updated();
