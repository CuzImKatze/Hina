import { Message, MessageEmbed } from "discord.js";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    const db = client.con;
    db.query("SELECT * FROM credits ORDER BY credits DESC LIMIT 10", [], async (err, results) => {

        let text = "";
        let user;
        for (const r of results) {
            user = await client.users.cache.get(r.id);
            if (user) {
                text += user.tag + ": " + r.credits + "\n";
            } else {
                text += "Unknown#0000" + ": " + r.credits + "\n";
            }
        }
        const embed = new MessageEmbed()
            .setColor("#3b7fff")
            .setTitle(await client.string(message.guild.id, "leaderboard.title"))
            .setDescription(text)
            .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
            .setTimestamp();
        return message.channel.send(embed);
    });
};
