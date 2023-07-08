var querystring = require('querystring');
var q = querystring.parse('name=value&key=value2');
console.log(JSON.stringify(q))