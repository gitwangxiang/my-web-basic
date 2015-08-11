'use strict';

var Option = require('./option');

function Topic(index, name, point, answers) {
  this.index = index;
  this.name = name;
  this.point = point;
  this.answers = answers;
  this.title = '';
  this.score = 0;
  this.options = [];
}

Topic.prototype.addOption = function(value, title) {
  this.options.push(new Option(value, title));
};

Topic.prototype.mark = function(inputs) {
  // need to overriding this function
};

module.exports = Topic;
