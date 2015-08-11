'use strict';

var Topic = require('../models/topic');

function HomeController() {

}

HomeController.prototype.index = function(req, res) {

  var fillIn1 = new Topic(1, 'fill-in-1', 5, ['统一建模语言']);
  fillIn1.title = 'UML的中文全称是：';
  fillIn1.addOption('');

  var fillIn2 = new Topic(2, 'fill-in-2', 5, ['继承性', '封装性', '多态性']);
  fillIn2.title = '对象最突出的特征是：';
  fillIn2.addOption('');
  fillIn2.addOption('');
  fillIn2.addOption('');

  var fillInTopics = [
    fillIn1,
    fillIn2
  ];

  var choice1 = new Topic(1, 'choice-1', 10, ['D']);
  choice1.title = 'UML与软件工程的关系是：';
  choice1.addOption('A', '(A) UML就是软件工程');
  choice1.addOption('B', '(B) UML参与到软件工程中软件开发过程的几个阶段');
  choice1.addOption('C', '(C) UML与软件工程无关');
  choice1.addOption('D', '(D) UML是软件工程的一部分');

  var choice2 = new Topic(2, 'choice-2', 10, ['A']);
  choice2.title = 'Java语言支持：';
  choice2.addOption('A', '(A) 单继承');
  choice2.addOption('B', '(B) 多继承');
  choice2.addOption('C', '(C) 单继承和多继承都支持');
  choice2.addOption('D', '(D) 单继承和多继承都不支持');

  var choiceTopics = [
    choice1,
    choice2
  ];

  var multipleChoice1 = new Topic(1, 'multiple-choice-1', 10, ['A', 'B', 'D']);
  multipleChoice1.title = '用例的粒度分为以下哪三种：';
  multipleChoice1.addOption('A', '(A) 概述级');
  multipleChoice1.addOption('B', '(B) 需求级');
  multipleChoice1.addOption('C', '(C) 用户目标级');
  multipleChoice1.addOption('D', '(D) 子功能级');

  var multipleChoice2 = new Topic(2, 'multiple-choice-2', 10, ['A', 'B', 'C']);
  multipleChoice2.title = '类图由以下哪三部分组成：';
  multipleChoice2.addOption('A', '(A) 名称(Name)');
  multipleChoice2.addOption('B', '(B) 属性(Attribute)');
  multipleChoice2.addOption('C', '(C) 操作(Operation)');
  multipleChoice2.addOption('D', '(D) 方法(Function)');

  var multipleChoiceTopics = [
    multipleChoice1,
    multipleChoice2
  ];

  var trueFalse1 = new Topic(1, 'true-false-1', 10, [false]);
  trueFalse1.title = '用例图只是用于和客户交流和沟通的，用于确定需求。';

  var trueFalse2 = new Topic(2, 'true-false-2', 10, [true]);
  trueFalse2.title = '在状态图中，终止状态在一个状态图中允许有任意多个。';

  var trueFalseTopics = [
    trueFalse1,
    trueFalse2
  ];

  var shortAnswer1 = new Topic(1, 'short-answer-1', 20,
    ['模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。']);
  shortAnswer1.title = '简述什么是模型以及模型的表现形式？';

  var shortAnswerTopics = [
    shortAnswer1
  ];

  res.render('index', {
    fillInTopics: fillInTopics,
    choiceTopics: choiceTopics,
    multipleChoiceTopics: multipleChoiceTopics,
    trueFalseTopics: trueFalseTopics,
    shortAnswerTopics: shortAnswerTopics
  });
};

module.exports = HomeController;
