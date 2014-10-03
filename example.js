var labeler = require('./labeler');
var threshold = 25;

labelers = [
  labeler('first:  '),
  labeler('second: '),
  labeler('third:  '),
  labeler('fourth:  '),
  labeler('fifth:  '),
  labeler('sixth:  '),
  labeler('seventh:  '),
  labeler('eighth:  '),
  labeler('ninth:  '),
  labeler('tenth:  ')
];

var loop = function(labeler, wait) {
  setInterval(function() {
    labeler.write(labeler.value.toString());
    labeler.value++;
  }, wait);
};

labelers.forEach(function(labeler) {
  labeler.value = 0;
  loop(labeler, Math.floor((Math.random() * threshold) + 1));
});
