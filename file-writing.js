const fs = require('fs');

fs.writeFile('data.html', 'this file has been created ', (err)=>{
    if(err) return err;
    console.log('this file have saved');
});

fs.appendFile('data.html', 'Hello, Mohamed', (err)=>{
    if(err) return err;
    console.log('this file have saved');
});

