import { Message, MessageEmbed, version } from "discord.js";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    const embed = new MessageEmbed()
        .setTitle(await client.string(message.guild.id, "botinfo.title"))
        .setColor("#3b7fff")
        .addField("Name", client.user.username)
        .setThumbnail(client.user.avatarURL())
        .addField("Developer", "DieKatze", true)
        .addField("Library", "Discord.js", true)
        .addField("Discord.js Version", version, true)
        .addField("Node Version", process.version, true)
        .addField("Guilds", client.guilds.cache.size, true)
        .addField("Users", client.users.cache.size, true)
        .addField("Botinvite", "[Invite](https://bit.ly/2tr30Oi)", true)
        .addField("Support Server", "[Join](https://discord.gg/8Fjkvr4)", true)
        .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
        .setTimestamp();

    return message.channel.send(embed);
};
