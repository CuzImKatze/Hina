import { MessageEmbed } from 'discord.js'
import * as axios from 'axios'
module.exports.run = async (prefix, cmd, client, args, message) => {
    let res = await axios.default.get("http://aws.random.cat/meow");
    let pic = res.data.file

    let embed = new MessageEmbed()
    .setTitle(await client.string(message.guild.id, "cat.title"))
    .setColor("#3b7fff")
    .setImage(pic)
    .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
    .setTimestamp()
    return message.channel.send(embed)
}