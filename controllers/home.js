'use strict';

var TopicHelper = require('../helpers/topic');
var HomeViewModel = require('../view-models/home');

function HomeController() {

}

HomeController.prototype.index = function(req, res) {

  var topicHelper = new TopicHelper();

  var topics = topicHelper.getTopics();

  var viewModel = new HomeViewModel(topics);

  res.render('index', viewModel);
};

module.exports = HomeController;
