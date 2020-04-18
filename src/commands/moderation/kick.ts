import { Message, MessageEmbed, ReactionCollector } from "discord.js";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    const db = client.con;
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        const embed = new MessageEmbed()
            .setTitle("Hina - Kick")
            .setDescription(await client.string(message.guild.id, "noperms"))
            .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
            .setTimestamp();
        return message.channel.send(embed);
    }
    const target = message.mentions.users.first();
    if (!target) { return message.channel.send(await client.string(message.guild.id, "moderation.nomember")); }
    const reason = args.slice(1).join(" ");
    if (!reason) { return message.channel.send(await client.string(message.guild.id, "moderation.noreason")); }

    const embed1 = new MessageEmbed()
        .setTitle("Hina - Kick")
        .setDescription(await client.string(message.guild.id, "moderation.kick") +
            target.username + await client.string(message.guild.id, "moderation.kick2") + reason)
        .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
        .setTimestamp();
    const reply = await message.channel.send(embed1);
    const yes = await reply.react("✅");
    const no = await reply.react("❌");
    const collector = reply.createReactionCollector((reaction, user) =>
        reaction.emoji.name === "✅" && user.id === message.author.id, { time: 12000 });

    collector.on("collect", async (r) => {
        const embed = new MessageEmbed()
            .setTitle("Hina - Kick")
            .addField("User", target.username)
            .addField(await client.string(message.guild.id, "moderation.reason"), reason)
            .addField("Moderator", message.author.username)
            .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
            .setTimestamp();

        db.query("SELECT * FROM `settings` WHERE guildid = ?", [message.guild.id], async (error, result) => {
            if (result.length === 0) {
                message.channel.send(embed);
                reply.delete();
                message.guild.member(target).kick(reason);
            }
            if (result.length === "none") {
                message.channel.send(embed);
                reply.delete();
                message.guild.member(target).kick(reason);
            } else {
                const ch: any = message.guild.channels.cache.get(result[0].modlog);
                ch.send(embed);
                reply.delete();
                message.guild.member(target).kick(reason);
            }
        });
    });
    const collect = reply.createReactionCollector((reaction, user) =>
        reaction.emoji.name === "❌" && user.id === message.author.id, { time: 12000 });
    collect.on("collect", async (r) => {
        return reply.delete();
    });
};
