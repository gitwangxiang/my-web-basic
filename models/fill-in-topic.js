'use strict';

var Topic = require('./topic');

function FillInTopic(index, name, point, answers, optionCount) {
  Topic.call(this, index, name, point, answers);
  this.optionCount = optionCount || 1;

  for (var i = 0; i < this.optionCount; i++) {
    this.addOption();
  }
}

FillInTopic.prototype = Object.create(Topic.prototype);

FillInTopic.prototype.constructor = FillInTopic;

FillInTopic.prototype.mark = function(inputs) {
  // TODO: Need to implement.
};

module.exports = FillInTopic;
