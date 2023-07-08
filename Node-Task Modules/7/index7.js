var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("current user home directory: " + os.userInfo().homedir);