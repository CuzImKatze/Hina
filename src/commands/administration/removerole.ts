import { Message, MessageEmbed } from "discord.js";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    if (!message.member.hasPermission) {
        const embed = new MessageEmbed()
            .setColor("#3b7fff")
            .setTitle(await client.string(message.guild.id, "noperms.title"))
            .setDescription(await client.string(message.guild.id, "noperms"))
            .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
            .setTimestamp();
        return message.channel.send(embed);
    }
    const target = message.mentions.members.first();
    if (!target) {
        return message.channel.send(await client.string(message.guild.id, "moderation.nomember"));
    }
    const role = message.mentions.roles.first();
    if (!role) {
        return message.channel.send(await client.string(message.guild.id, "moderation.norole"));
    }
    target.roles.remove(role.id);
};
