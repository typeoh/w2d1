var get = require('./http-function');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function reverse(html) {
  console.log(html.split("").reverse().join(""));
}

get(requestOptions, reverse);