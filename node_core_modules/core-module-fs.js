const fs = require('fs');

// Read a file asynchronously
fs.readFile('existingfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});

// `Outer template with ${`inner template`}`


// Create or overwrite a file
fs.writeFile('newfile.txt', 'Hello, this is a new file!', (err) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log('File created and data written successfully!');
    }
});



// Append data to an existing file
fs.appendFile('existingfile.txt', '\nAppended text', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data appended successfully!');
    }
});



// Delete a file
fs.unlink('newfilesa.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});


// Check if the file exists before deleting
fs.access('newfilesa.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist!');
  } else {
    // File exists, proceed to delete
    fs.unlink('newfile.txt', (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('File deleted successfully!');
      }
    });
  }
});
