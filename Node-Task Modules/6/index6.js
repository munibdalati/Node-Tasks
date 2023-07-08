var url = require('url');

var adr = 'http://www.example.com:8080/path?query=value#fragment';
var q = url.parse(adr, true);

console.log(`protocol: ${q.protocol}`); 
console.log(`host: ${q.host}`); 
console.log(`pathname: ${q.pathname}`);
console.log(`search: ${q.search}`); 
console.log(`hash: ${q.hash}`); 
