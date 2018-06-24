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



client.on('message', message => { // When the message a message is executed

    if (message.content === 'b') { // if that message matches ping

       message.reply('c'); // 

       }

});


if(command === "say"){
  let text = args.slice(1).join("hi");
  message.delete();
  message.channel.send(text);
}

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
