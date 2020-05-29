//210944
// https://discordapp.com/oauth2/authorize?client_id=715628686862319747&scope=bot&permission=464896
require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

// on ready

client.on('ready', () => {
    console.log(`Ready to rumble.`);
  });
//on message

client.on('message' , msg =>{
    if (msg.content === 'hello') {
        msg.channel.send('hi i am computer generate bot ....How can I help you')
    }
} );

// client login
client.login(process.env.TOKEN);