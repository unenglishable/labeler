var path = require('path');
var Labeler = require(path.join(__dirname, 'labeler'));

var Index = {};
Index.create = function(label) {
  var labeler = new Labeler({label: label});
  labeler.init();
  return labeler;
};
Index.end = Labeler.end;

module.exports = Index;
