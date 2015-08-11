'use strict';

var FillInTopic = require('../models/fill-in-topic');
var ChoiceTopic = require('../models/choice-topic');
var MultipleChoiceTopic = require('../models/multiple-choice-topic');
var TrueFalseTopic = require('../models/true-false-topic');
var ShortAnswerTopic = require('../models/short-answer-topic');

function HomeViewModel(topics) {
  this.topics = topics;
}

HomeViewModel.prototype.getFillInTopics = function() {
  return this.topics.filter(function(topic) {
    return topic instanceof FillInTopic;
  });
};

HomeViewModel.prototype.getChoiceTopics = function() {
  return this.topics.filter(function(topic) {
    return topic instanceof ChoiceTopic;
  });
};

HomeViewModel.prototype.getMultipleChoiceTopics = function() {
  return this.topics.filter(function(topic) {
    return topic instanceof MultipleChoiceTopic;
  });
};

HomeViewModel.prototype.getTrueFalseTopics = function() {
  return this.topics.filter(function(topic) {
    return topic instanceof TrueFalseTopic;
  });
};

HomeViewModel.prototype.getShortAnswerTopics = function() {
  return this.topics.filter(function(topic) {
    return topic instanceof ShortAnswerTopic;
  });
};

module.exports = HomeViewModel;
