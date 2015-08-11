'use strict';

function IndexController() {

}

IndexController.prototype.index = function(req, res) {
    res.render('index', {title: 'Express'});
};

module.exports = IndexController;