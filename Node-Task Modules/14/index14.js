let dns = require('dns');
let w3 = dns.lookup('www.google.com', function (err, addresses, family) {
  console.log(addresses);
});