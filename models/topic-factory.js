'use strict';

var FillInTopic = require('./fill-in-topic');
var ChoiceTopic = require('./choice-topic');
var MultipleChoiceTopic = require('./multiple-choice-topic');
var TrueFalseTopic = require('./true-false-topic');
var ShortAnswerTopic = require('./short-answer-topic');
var Utils = require('../lib/utils');

function TopicFactory() {
}

TopicFactory.prototype.create = function(data) {

  var topic;

  if (data.type === Utils.TOPIC_TYPE.FILL_IN) {

    topic = new FillInTopic(data.index, data.name, data.point, data.answers, data.options.length);
    topic.title = data.title;

    return topic;

  } else if (data.type === Utils.TOPIC_TYPE.CHOICE) {

    topic = new ChoiceTopic(data.index, data.name, data.point, data.answers);
    topic.title = data.title;
    data.options.forEach(function(option) {
      topic.addOption(option.value, option.title);
    });

    return topic;

  } else if (data.type === Utils.TOPIC_TYPE.MULTIPLE_CHOICE) {

    topic = new MultipleChoiceTopic(data.index, data.name, data.point, data.answers);
    topic.title = data.title;
    data.options.forEach(function(option) {
      topic.addOption(option.value, option.title);
    });

    return topic;

  } else if (data.type === Utils.TOPIC_TYPE.TRUE_FALSE) {

    topic = new TrueFalseTopic(data.index, data.name, data.point, data.answers);
    topic.title = data.title;

    return topic;

  } else if (data.type === Utils.TOPIC_TYPE.SHORT_ANSWER) {

    topic = new ShortAnswerTopic(data.index, data.name, data.point, data.answers);
    topic.title = data.title;

    return topic;

  }

  return topic;
};

module.exports = TopicFactory;
