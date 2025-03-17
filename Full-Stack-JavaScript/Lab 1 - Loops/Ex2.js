function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && n > 0;
}

const helloWorlds = function (num) {

  if (!isNumeric(num)) {
    console.log("Goodbye World!");
    return;
  }

  for (var i = 0; i < num; i++) {
    console.log("Hello World!");
  }
};

helloWorlds(25);

helloWorlds(true); // Goodbye
helloWorlds("hello"); // Goodbye
helloWorlds(null); // Goodbye
helloWorlds(undefined); // Goodbye
