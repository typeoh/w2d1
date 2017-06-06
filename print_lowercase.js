var get = require('./http-function');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function lower(html) {
  console.log(html.toLowerCase());
}

get(requestOptions, lower);
