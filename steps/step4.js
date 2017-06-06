var https = require('https');
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

// function getAndPrintHTML (options) {
function getHTML (options, callback) {
    var buffer = "";
    https.get(options, function (response) {
    response.setEncoding('utf8');

      response.on('data', function (data) {
      buffer += data;

      });
    response.on('end', function() {
      callback(buffer);
      console.log('Response stream complete.');
    });
 });
}
getHTML(requestOptions,function(html){
  console.log(html);
});


    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)

