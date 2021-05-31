import Discord from 'discord.js';

const bot_client = new Discord.Client();

bot_client.once('ready', () => {
    console.log('Ready!');
})
