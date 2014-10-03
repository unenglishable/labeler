var cursor = require('cursed');
var chalk = require('chalk');
var labelerCount = 0;

module.exports = function(label) {
  var labeler = {};
  labeler.label = label;
  labeler.number = labelerCount;
  labelerCount++;
  labeler.write = function(string) {
    cursor.move(this.label.length, this.number);
    process.stdout.write(chalk.green.bold(string)+'\r');
    cursor.up(this.number);
  };
  labeler.init = function() {
    cursor.down(this.number);
    process.stdout.write('\n');
    cursor.up();
    process.stdout.write(chalk.blue.bold(this.label));
    process.stdout.write('\r');
    cursor.up(this.number);
  };
  labeler.init();
  return labeler;
};
