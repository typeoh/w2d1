var https = require('https');
// var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step1.html'
//   };

module.exports = function getHTML (options, callback) {
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
// getHTML(requestOptions,function(html){
//   console.log(html);
// });
