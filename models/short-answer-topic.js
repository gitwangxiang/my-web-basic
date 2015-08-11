'use strict';

var Topic = require('./topic');

function ShortAnswerTopic(index, name, point, answers) {
  Topic.call(this, index, name, point, answers);
}

ShortAnswerTopic.prototype = Object.create(Topic.prototype);

ShortAnswerTopic.prototype.constructor = ShortAnswerTopic;

ShortAnswerTopic.prototype.mark = function(inputs) {
  // TODO: Need to implement.
};

module.exports = ShortAnswerTopic;
