import { MessageEmbed } from 'discord.js'
module.exports.run = async (prefix, cmd, client, args, message) => {
    if(!message.member.hasPermission) {
        let embed = new MessageEmbed()
        .setColor("#3b7fff")
        .setTitle(await client.string(message.guild.id, "noperms.title"))
        .setDescription(await client.string(message.guild.id, "noperms"))
        .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
        .setTimestamp();
        return message.channel.send(embed)
    }
    let target = message.mentions.members.first()
    if(!target) return message.channel.send(await client.string(message.guild.id, "moderation.nomember"))
    let role = message.mentions.roles.first()
    if(!role) return message.channel.send(await client.string(message.guild.id, "moderation.norole"))
    target.roles.remove(role.id)
}