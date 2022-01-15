const fs = require('fs');
var util = require('util');

let run=(routeFile) => {
    fs.readFile(routeFile, 'utf8', function(err, data) {  
        if (err) throw err;
        let x = data.replace(/=/g, "': '").trim().split("\n")
        let y = JSON.stringify(x).toString().replace(/'/g,'"').replace("[", "{").replace("]","}")
        let j = JSON.parse(y)
        let createFile = `window._env_ = ${util.inspect(j)}`
        fs.writeFileSync('./public/env-config.js',createFile);
    });
}

run('.env')