'use strict';

var Topic = require('./topic');

function TrueFalseTopic(index, name, point, answers) {
  Topic.call(this, index, name, point, answers);
}

TrueFalseTopic.prototype = Object.create(Topic.prototype);

TrueFalseTopic.prototype.constructor = TrueFalseTopic;

TrueFalseTopic.prototype.mark = function(inputs) {
  // TODO: Need to implement.
};

module.exports = TrueFalseTopic;
