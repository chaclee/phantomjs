var page = require('webpage').create();
page.open('http://www.example.com', function() {
    page.render('example.png');
    phantom.exit();
});