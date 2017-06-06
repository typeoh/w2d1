var get = require('./http-function');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function Upper(html) {
  console.log(html.toUpperCase());
}

get(requestOptions, Upper);
