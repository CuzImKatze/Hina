import { Message, MessageEmbed } from "discord.js";
import * as moment from "moment";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    let user = message.mentions.members.first();
    if (!user) { user = message.member; }

    const compare = (a, b) => {
        if (a.position > b.position) { return -1; }
        if (a.position < b.position) { return 1; }
        return 0;
    };

    const embed = new MessageEmbed()
        .setTitle(user.user.username)
        .setColor("#3b7fff")
        .addField("Name + Tag", user.user.tag, true)
        .addField("ID", user.id, true)
        .addField("Status", user.user.presence.status, true);
    if (user.user.presence.activities) {
        embed.addField("Game", user.user.presence.activities);
    } else {
        embed.addField("Game", "-");
    }
    embed.addField(await client.string(message.guild.id, "userinfo.roles"),
        user.roles.cache.sort(compare).map((roles) => roles).join(", ").substr(0, 900) || `-`, false);
    embed.addField(await client.string(message.guild.id, "userinfo.created")
        , moment(user.user.createdAt).format("dddd, Do MMMM YYYY, HH:mm:ss"))
        .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
        .setTimestamp();
    return message.channel.send(embed);
};
