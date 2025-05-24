const path = require('path');

// Join paths
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log('Full path:', fullPath);


// Get file extension
const ext = path.extname(fullPath);
console.log('File extension:', ext);
console.log('File name:', path.basename(fullPath));
console.log('Directory name:', path.dirname(fullPath));
console.log('Path separator:', path.sep);
console.log('Path delimiter:', path.delimiter);
console.log(``);
// Output:
// Full path: /home/username/nodejs/folder/file.txt
// File extension: .txt  
// File name: file.txt
// Directory name: /home/username/nodejs/folder

// Path separator: /
// Path delimiter
// :
