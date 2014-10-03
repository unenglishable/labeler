var cursor = require('cursed');
var chalk = require('chalk');
var labelerCount = 0;
var currentRow = 0;

module.exports = function(label) {
  var labeler = {};
  labeler.label = label;
  labeler.row = labelerCount;
  labelerCount++;
  labeler.write = function(string) {
    cursor.move(this.label.length, this.row - currentRow);
    process.stdout.write(chalk.green.bold(string)+'\r');
    currentRow = this.row;
  };
  labeler.init = function() {
    cursor.down(this.row - currentRow);
    process.stdout.write('\n');
    cursor.up();
    process.stdout.write(chalk.blue.bold(this.label));
    process.stdout.write('\r');
    cursor.up(this.row - currentRow);
  };
  labeler.init();
  return labeler;
};
