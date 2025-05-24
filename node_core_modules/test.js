const fs = require('fs');

//Read a file asynchronously
fs.readFile('existingfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file: ', err);
        return
    } else {
        console.log('File Content:', data);
    }
});

//Create or overwrite a file

// fs.writeFile('newfile.txt','content',(err)=>{
//     if (err) {console.error("Error:", err); return;}
//     console.log('File created successfully!')
// });