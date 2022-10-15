(function () {
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;


let birthday = "Sep 3,2022 00:00:00",
countdown = new
Date(birthday).getTime(),
x = setInterval(function () {
    
let now = new Date().getTime(),
distance = countdown - now;

document.getElementById("days").innerText = Math.floor(distance / (day)),
document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second),








// do something later when the date is reached
function () {
   if (distance<0) {
    let headline = document.getElementById("headline"),
     countdown = document. getElementById("countdown"),
     content = document.getElementById("content");
    headline.innerText = "it's my birthday" 
    clearInterval(x);
} 
}



// seconds
}, 0)


}());