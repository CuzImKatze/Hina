import { MessageEmbed } from 'discord.js'
module.exports.run = async (prefix, cmd, client, args, message) => {
    if (message.member.id == "292588280304893952") {
        let embed = new MessageEmbed()
            .setTitle("Hina - Restart")
            .setColor("#3b7fff")
            .setDescription("Restarting....")
            .setThumbnail("https://cdn.discordapp.com/attachments/669265222023774240/693223372808781874/image0.gif")
            .setFooter("Restarted by " + message.author.username)
            .setTimestamp()
        message.channel.send(embed)
        setTimeout(() => {
            process.exit(1)
        }, 12000);
    } else {
        let embed = new MessageEmbed()
            .setTitle("Hina - Restart")
            .setColor("#3b7fff")
            .setThumbnail("https://giphy.com/gifs/rick-roll-lgcUUCXgC8mEo")
            .setTimestamp()
        return message.channel.send(embed)
    }
}