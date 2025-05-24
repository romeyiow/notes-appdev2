const os = require('os');

// Get system information
console.log('Platform:', os.platform()); // 'linux', 'darwin', 'win32'
console.log('CPU architecture:', os.arch());
console.log('Free memory:', os.freemem());
console.log('Total memory:', os.totalmem());
console.log('Home directory:', os.homedir());
console.log('Host name:', os.hostname());
console.log('OS type:', os.type());
console.log('OS release:', os.release());
console.log('User info:', os.userInfo());
