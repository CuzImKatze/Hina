import { MessageEmbed } from 'discord.js'
import * as axios from 'axios'
module.exports.run = async (prefix, cmd, client, args, message) => {
    let res = await axios.default.get("https://random.dog/woof.json");
    let pic = res.data.url

    let embed = new MessageEmbed()
    .setTitle(await client.string(message.guild.id, "dog.title"))
    .setColor("#3b7fff")
    .setImage(pic)
    .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
    .setTimestamp()
    return message.channel.send(embed)
}
