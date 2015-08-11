'use strict';

var TopicHelper = require('../helpers/topic');
var FillInTopic = require('../models/fill-in-topic');
var ChoiceTopic = require('../models/choice-topic');
var MultipleChoiceTopic = require('../models/multiple-choice-topic');
var TrueFalseTopic = require('../models/true-false-topic');
var ShortAnswerTopic = require('../models/short-answer-topic');

function HomeController() {

}

HomeController.prototype.index = function(req, res) {

  var topicHelper = new TopicHelper();

  var topics = topicHelper.getTopics();

  var fillInTopics = topics.filter(function(topic) {
    return topic instanceof FillInTopic;
  });

  var choiceTopics = topics.filter(function(topic) {
    return topic instanceof ChoiceTopic;
  });

  var multipleChoiceTopics = topics.filter(function(topic) {
    return topic instanceof MultipleChoiceTopic;
  });

  var trueFalseTopics = topics.filter(function(topic) {
    return topic instanceof TrueFalseTopic;
  });

  var shortAnswerTopics = topics.filter(function(topic) {
    return topic instanceof ShortAnswerTopic;
  });


  res.render('index', {
    fillInTopics: fillInTopics,
    choiceTopics: choiceTopics,
    multipleChoiceTopics: multipleChoiceTopics,
    trueFalseTopics: trueFalseTopics,
    shortAnswerTopics: shortAnswerTopics
  });
};

module.exports = HomeController;
