'use strict';

var Topic = require('./topic');

function MultipleChoiceTopic(index, name, point, answers) {
  Topic.call(this, index, name, point, answers);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);

MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.mark = function(inputs) {
  // TODO: Need to implement.
};

module.exports = MultipleChoiceTopic;
