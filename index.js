var path = require('path');
var Labeler = require(path.join(__dirname, 'labeler'));
var labelerCount = 0;

module.exports = function(label) {
  var labeler = new Labeler({label: label, row: labelerCount});
  labelerCount++;
  labeler.init();
  return labeler;
};
