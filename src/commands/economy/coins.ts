import { Message, MessageEmbed } from "discord.js";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    const db = client.con;

    let user = message.mentions.users.first();
    if (!user) { user = message.author; }
    if (user.bot) {
        return message.channel.send(await client.string(message.guild.id, "economy.bots"));
    }
    db.query("SELECT * FROM `credits` WHERE id = ?", [user.id], async (error, result) => {
        if (result.length === 0) {
            db.query("INSERT INTO `credits` (id, credits) VALUES (?, ?)", [user.id, 0]);
            const embed = new MessageEmbed()
                .setTitle("Hina - Coins")
                .setColor("#3b7fff")
                .setDescription(user.tag +
                    await client.string(message.guild.id, "economy.has") + "0" +
                    await client.string(message.guild.id, "economy.coins"))
                .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
                .setTimestamp();
            return message.channel.send(embed);
        } else {
            const embed = new MessageEmbed()
                .setTitle("Hina - Coins")
                .setColor("#3b7fff")
                .setDescription(user.tag +
                    await client.string(message.guild.id, "economy.has") +
                    result[0].credits + await client.string(message.guild.id, "economy.coins"))
                .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
                .setTimestamp();
            return message.channel.send(embed);
        }
    });
};
