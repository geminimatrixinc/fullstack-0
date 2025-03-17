

const startClock = function () {
  var action = false;
  do {
    
    for (var i = 0; i < 10; i++) {
      const date = new Date(Date.now());
      console.log("Current time is: " + date.toGMTString());
    }

    action = window.confirm("Do you want to stop the clock?");
  } while (action);
};

startClock();
