var $ = require('component/jquery@1.0.0');
var Browser = require('../index');

$(function () {
    $('#box').text(Browser['is']);
});
