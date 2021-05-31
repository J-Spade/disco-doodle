const express = require('express.js');

const PORT = process.env.PORT;
const webapp = express();

webapp.listen(PORT, function () {
    console.log(`Webapp listening on port ${PORT}`)
});
webapp.get('/', function (req, res) {
    res.send('Hello World!');
});
