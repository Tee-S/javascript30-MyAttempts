var hourHand = document.getElementById("hourHand");
var minuteHand = document.getElementById("minuteHand");
var secondHand = document.getElementById("secondHand");
//var testDate = new Date();

setInterval(updateClock, 1000);

function updateClock(){
    //this.testDate.setSeconds(this.testDate.getSeconds() + 10);

    var currentDate = new Date();
    //var currentDate = testDate;
    var hours   = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var hoursDegree = hours/24*360;
    hourHand.style.webkitTransform = "rotate("+ hoursDegree + "deg)";

    var minutesDegree = minutes/60*360;
    minuteHand.style.webkitTransform = "rotate("+ minutesDegree + "deg)";

    var secondsDegree = seconds/60*360;
    secondHand.style.webkitTransform = "rotate("+ secondsDegree + "deg)";

}
