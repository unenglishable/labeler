var cursor = require('cursed');
var chalk = require('chalk');
var labelerCount = 0;

module.exports = function(label) {
  var labeler = {};
  labeler.label = label;
  labeler.number = labelerCount;
  labelerCount++;
  labeler.write = function(string) {
    cursor.down(this.number);
    cursor.right(this.label.length);
    cursor.clearToEOL();
    process.stdout.write(chalk.yellow.bold(string));
    cursor.left(this.label.length+string.length);
    cursor.up(this.number);
  };
  labeler.init = function() {
    cursor.down(this.number);
    process.stdout.write('\n');
    cursor.up();
    process.stdout.write(chalk.green.bold(this.label));
    process.stdout.write('\r');
    cursor.up(this.number);
  };
  labeler.init();
  return labeler;
};
