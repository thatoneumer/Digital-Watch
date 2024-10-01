setInterval(() => {
  var time = new Date();

  var userHour = (document.getElementById("hour").innerText = time.getHours());
  var userMin = (document.getElementById("min").innerText = time.getMinutes());
  var userSec = (document.getElementById("sec").innerText = time.getSeconds());
  var am = document.getElementById("am");
  var pm = document.getElementById("pm")
  
  if (userHour > 12) {
    pm = pm.innerText = "[pm]";
  } else {
    am = am.innerText = "[am]";
  }
  if (userHour > 12) {
    userHour = document.getElementById("hour").innerText = time.getHours() - 12;
  }

}, 1000);
