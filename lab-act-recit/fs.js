const fs = require('fs');

// Read a file asynchronously
const fileName = 'sample.txt';
const characterEncoding = 'utf8';
fs.readFile(fileName, characterEncoding, function (err, data) {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});


fs.writeFile('newfile.txt', 'This is a new file created by Node.JS', (err) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log('File created and data written successfully!');
    }
});

fs.unlink('newfile.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});

fs.access('newfile.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File does not exist!');
    } else {
        fs.unlink('newfile.txt', (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            } else {
                console.log('File deleted successfully!');
            }
        });
    }
});
