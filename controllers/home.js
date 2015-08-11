'use strict';

function HomeController() {

}

HomeController.prototype.index = function(req, res) {
    res.render('index', {title: 'Express'});
};

module.exports = HomeController;