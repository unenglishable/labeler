var labeler = require('./labeler');

var first = labeler('first:  ');
var second = labeler('second: ');
var third = labeler('third:  ');

first.value = 0;
second.value = 0;
third.value = 0;

var loop = function(labeler, wait) {
  setInterval(function() {
    labeler.write(labeler.value.toString());
    labeler.value++;
  }, wait);
};

loop(first, 10);
loop(second, 500);
loop(third, 1000);
