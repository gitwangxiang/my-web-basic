'use strict';

var TopicFactory = require('../models/topic-factory');
var topicSeed = require('../seeds/topics');


function TopicHelper() {

}

TopicHelper.prototype.getTopics = function() {

  var topics = [];

  var factory = new TopicFactory();

  topicSeed.data.forEach(function(record) {
    topics.push(factory.create(record));
  });

  return topics;
};

module.exports = TopicHelper;
