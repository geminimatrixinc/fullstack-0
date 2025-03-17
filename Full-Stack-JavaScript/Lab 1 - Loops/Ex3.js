

const greaterThanSize = function () {
  var count = 0;
  const size = Math.floor(Math.random(0, 10) * 100);

  while (count < size) {
    count++;
    console.log(`The current size is ${size} and count is ${count}`);
  }
};

greaterThanSize();
