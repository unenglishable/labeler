var path = require('path');
var labeler = require(path.join(__dirname, 'index'));
var threshold = 25;

labelers = [
  {labeler: labeler.create('first:  '), value: 0},
  {labeler: labeler.create('second: '), value: 0},
  {labeler: labeler.create('third:  '), value: 0},
  {labeler: labeler.create('fourth:  '), value: 0},
  {labeler: labeler.create('fifth:  '), value: 0},
  {labeler: labeler.create('sixth:  '), value: 0},
  {labeler: labeler.create('seventh:  '), value: 0},
  {labeler: labeler.create('eighth:  '), value: 0},
  {labeler: labeler.create('ninth:  '), value: 0},
  {labeler: labeler.create('tenth:  '), value: 0}
];

var loop = function(labelPair, wait) {
  setInterval(function() {
    labelPair.labeler.write(labelPair.value.toString());
    labelPair.value++;
  }, wait);
};

labelers.forEach(function(labelPair) {
  loop(labelPair, Math.floor((Math.random() * threshold) + 1));
});

process.on('SIGINT', function() {
  labeler.end();
  process.exit();
});
