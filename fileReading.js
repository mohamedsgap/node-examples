const fs = require('fs');

fs.readdir('./', (err, data)=> {
    if (err) {
        throw err;
    }
    else {
        console.log(data);
    }

});

fs.readFile('index.html', (err, content)=>{
     if (err) return err;
     console.log(content);
});