'use strict';

var Topic = require('./topic');

function ChoiceTopic(index, name, point, answers) {
  Topic.call(this, index, name, point, answers);
}

ChoiceTopic.prototype = Object.create(Topic.prototype);

ChoiceTopic.prototype.constructor = ChoiceTopic;

ChoiceTopic.prototype.mark = function(inputs) {
  // TODO: Need to implement.
};

module.exports = ChoiceTopic;
