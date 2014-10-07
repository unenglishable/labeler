var path = require('path');
var labeler = require(path.join(__dirname, 'index'));
var threshold = 25;

labelers = [
  {labeler: labeler('first:  '), value: 0},
  {labeler: labeler('second: '), value: 0},
  {labeler: labeler('third:  '), value: 0},
  {labeler: labeler('fourth:  '), value: 0},
  {labeler: labeler('fifth:  '), value: 0},
  {labeler: labeler('sixth:  '), value: 0},
  {labeler: labeler('seventh:  '), value: 0},
  {labeler: labeler('eighth:  '), value: 0},
  {labeler: labeler('ninth:  '), value: 0},
  {labeler: labeler('tenth:  '), value: 0}
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
