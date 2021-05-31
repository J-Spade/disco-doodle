// import Discord from 'discord.js';
import express from 'express.js';

const PORT = process.env.PORT;

// const bot_client = new Discord.Client();
const webapp = express();

// bot_client.once('ready', () => {
//     console.log('Ready!');
// });

webapp.listen(PORT, function () {
    console.log(`Webapp listening on port ${PORT}`)
});
webapp.get('/', function (req, res) {
    res.send('Hello World!');
});
