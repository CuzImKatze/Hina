import { Message } from 'discord.js';
module.exports = async(client, message) => {

    if(message.author.bot) return;

    let prefix = client.config.prefix;
    let messageArry = message.content.split(" ");
    let cmd = messageArry[0];
    let args = messageArry.slice(1);
    let author = message.author;
    let guild = message.guild;

    if(!message.content.startsWith(prefix)) {
        return;
    }

    let commandFile = client.commands.get(cmd.slice(prefix.length))
    if(commandFile) {
        commandFile.run(prefix, cmd, client, args, message)
    }
    
}