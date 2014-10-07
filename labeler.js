var cursor = require('cursed');
var chalk = require('chalk');
var currentRow = 0;

var Labeler = module.exports = function(options) {
  this.label = options.label;
  this.row = options.row;
};
Labeler.prototype.write = function(string) {
  cursor.move(this.label.length, this.row - currentRow);
  process.stdout.write(chalk.green.bold(string)+'\r');
  currentRow = this.row;
};
Labeler.prototype.init = function() {
  cursor.down(this.row - currentRow);
  process.stdout.write('\n');
  cursor.up();
  process.stdout.write(chalk.blue.bold(this.label));
  process.stdout.write('\r');
  cursor.up(this.row - currentRow);
};
