// Set the date we're counting down to
var countDownDate = new Date("Sep 23, 2022 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // var IjstijdTime = 36500000 * 60 * 60 * 24;
    // var Ijstijden = (distance / 1000) / IjstijdTime;
    // document.getElementById("ijstijd").innerHTML = Math.round(Ijstijden * 100000) / 100000;

    var ECTime = ((28*60) + 0)*60; 
    var ECs = (distance/1000) / ECTime;
    document.getElementById("ECs").innerHTML = Math.round(ECs*100000)/100000;

    var BackToTheFutureTime = 342 * 60;
    var BackToTheFutures = (distance / 1000) / BackToTheFutureTime;
    document.getElementById("backtothefuture").innerHTML = Math.round(BackToTheFutures * 100000) / 100000;

    var TimeMachineTime = (39*60)+43;
    var TimeMachines = (distance / 1000) / TimeMachineTime;
    document.getElementById("timemachine").innerHTML = Math.round(TimeMachines*1000)/1000;

    var HarryPotterTime = 8*60*60;
    var HarryPotters = (distance / 1000) / HarryPotterTime;
    document.getElementById("harrypotter").innerHTML = Math.round(HarryPotters*10000)/10000;

    var MillersPlanetTime = (3600 / 2555);
    var MillersPlanets = (distance / 1000) / MillersPlanetTime;
    document.getElementById("interstellar").innerHTML = Math.round(MillersPlanets * 10000) / 10000;

    var reisTijdSomeren = ((3*60)+42)*60;
    var reisjes = (distance/1000) / reisTijdSomeren;
    document.getElementById("reisjessomeren").innerHTML = Math.round(reisjes * 10000) / 10000;

    var DoctorWhoTime = 45 * 60;
    var DoctorWhos = (distance / 1000) / DoctorWhoTime;
    document.getElementById("doctorwho").innerHTML = Math.round(DoctorWhos * 10000) / 10000;

    var TijdmachineTime = 223;
    var Tijdmachines = (distance / 1000) / TijdmachineTime;
    document.getElementById("tijdmachine").innerHTML = Math.round(Tijdmachines * 10000) / 10000;

    var ThirthySecondsTime = 30;
    var ThirthySecondsGames = (distance / 1000) / ThirthySecondsTime;
    document.getElementById("30seconds").innerHTML = Math.round(ThirthySecondsGames * 10000) / 10000;

    var HorlogeTime = 5 * 60;
    var Horloges = (distance / 1000) / HorlogeTime;
    document.getElementById("horloge").innerHTML = Math.round(Horloges * 10000) / 10000;

}, 1000);