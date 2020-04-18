import * as axios from "axios";
import { Message, MessageEmbed } from "discord.js";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    const res = await axios.default.get("http://aws.random.cat/meow");
    const pic = res.data.file;

    const embed = new MessageEmbed()
        .setTitle(await client.string(message.guild.id, "cat.title"))
        .setColor("#3b7fff")
        .setImage(pic)
        .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
        .setTimestamp();
    return message.channel.send(embed);
};
