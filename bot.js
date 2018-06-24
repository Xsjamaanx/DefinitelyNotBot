const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => { // know if our bot is online

    console.log('I am ready!');

});

 

client.on('message', message => { // When the message a message is executed

    if (message.content === 'ping') { // if that message matches ping

       message.reply('pong'); // 

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDYwMzQ4MDk4NTI3NjI1MjI4.DhDc4A.oMHrs_fshq9fTbUUnk8JxlDq6P0);//where BOT_TOKEN is the token of our bo
