const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

if(message.content == 'Is Mishi hungry?') {
    message.reply('Yes! :3 ');
}

});

bot.login('NDYxNjQ3NjU2NjIwNjU0NjEy.DhW7iQ.0hle2Ej8cU0R7RMhI-ERmCZeA90')
