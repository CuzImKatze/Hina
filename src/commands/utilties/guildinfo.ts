import { Message, MessageEmbed } from "discord.js";
import * as moment from "moment";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    const compare = (a, b) => {
        if (a.position > b.position) { return -1; }
        if (a.position < b.position) { return 1; }
        return 0;
    };
    const embed = new MessageEmbed()
        .setTitle(`Hina - ${message.guild.name}`)
        .setColor("#3b7fff")
        .setThumbnail(message.guild.iconURL())
        .addField("Name", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Owner", message.guild.owner.user.tag, true)
        .addField(await client.string(message.guild.id, "guildinfo.verify"), message.guild.verificationLevel, true)
        .addField("User", message.guild.members.cache.filter((members) => !members.user.bot).size, true)
        .addField("Bots", message.guild.members.cache.filter((members) => members.user.bot).size, true)
        .addField("Channel", message.guild.channels.cache.size, true)
        .addField("Region", message.guild.region, true)
        .addField(await client.string(message.guild.id, "userinfo.roles"),
            message.guild.roles.cache.sort(compare).map((roles) => roles).join(", ").substr(0, 1000))
        .addField(await client.string(message.guild.id, "userinfo.created"),
            moment(message.guild.createdAt).format("dddd, Do MMMM YYYY, HH:mm:ss"))
        .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
        .setTimestamp();
    return message.channel.send(embed);
};
