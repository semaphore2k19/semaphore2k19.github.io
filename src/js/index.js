document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems, {});
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {});
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "top",
    hoverEnabled: true
  });
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems, {
    scrollOffset: 500
  });
  var typed1 = new Typed("#loadingTitle", {
    strings: [
      "Searching the map!",
      "Locating the Treasure",
      "Brushing up old Photos",
      "Sharpening the weapons",
      "Preparing the Welcome Shack",
      "Almost set for you!"
    ],
    typeSpeed: 120,
    loop: true
  });
});

// Function that executes when the event modal is opened
function showEvent(name) {
  fetch("src/events.json")
    .then(res => {
      res.json().then(_res => {
        if (_res[name] != null) {
          document.getElementById("evt_name").innerHTML = _res[name].name;
          document.getElementById("evt_acname").innerHTML =
            "( " + _res[name].acname + " )";
          document.getElementById("evt_desc").innerHTML =
            _res[name].description;
          let rules = "<ul>";
          _res[name].rules.forEach((element, index) => {
            let num = parseInt(index) + 1;
            rules += "<li>" + num + ") " + element;
          });
          rules += "</ul>";
          document.getElementById("rules").innerHTML = rules;
          document.getElementById("h1").innerHTML =
            "<span class='yellow-text text-darken-3'>" +
            _res[name].heads[0].name +
            "</span><a class='right btn btn-floating grey darken-3' href='tel:" +
            _res[name].heads[0].contact +
            "'><i class='material-icons'>phone</i></a><br>" +
            _res[name].heads[0].contact;
          document.getElementById("h2").innerHTML =
            "<span class='yellow-text text-darken-3'>" +
            _res[name].heads[1].name +
            "</span><a class='right btn btn-floating grey darken-3' href='tel:" +
            _res[name].heads[0].contact +
            "'><i class='material-icons'>phone</i></a><br>" +
            _res[name].heads[1].contact;
          document.getElementById("progress").remove();
        } else {
          console.log("Invalid Request");
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
}

// thereshold funtion that executes when the event doesnt executes faster
window.setTimeout(() => {
  document
    .getElementById("loader")
    .setAttribute("style", "height:0vh;opacity:0;");
}, 17000);

// Function that executes on the DOM load
window.onload = () => {
  document
    .getElementById("loader")
    .setAttribute("style", "height:0vh;opacity:0;");
  showMainTItle();
};

// Function that shows the main title
const showMainTItle = () => {
  var typed2 = new Typed("#mainTitle", {
    strings: ["ugocrjqtg 2m19", "Semaphore 2k19", "vhpdskruh 2n19"],
    typeSpeed: 80,
    loop: true,
    shuffle: false,
    showCursor: false
  });
};

// Countdown function
function countdown(endDate) {
  let days, hours, minutes, seconds;
  endDate = new Date(endDate).getTime();
  if (isNaN(endDate)) {
    return;
  }
  setInterval(calculate, 1000);
  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();
    let timeRemaining = parseInt((endDate - startDate) / 1000);
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      seconds = parseInt(timeRemaining);
      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
}

// IIEE for countdown
(function() {
  countdown("03/01/2019 09:30:00 AM");
})();
