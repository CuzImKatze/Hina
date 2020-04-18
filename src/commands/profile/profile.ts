import { Message, MessageEmbed } from "discord.js";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    const db = client.con;
    let target = message.mentions.users.first();
    if (!target) { target = message.author; }
    if (target.bot) { return; }
    db.query("SELECT * FROM `profile` WHERE id = ?", [target.id], async (error, result) => {
        if (result.length === 0) {
            db.query("INSERT INTO `profile` (id) VALUES (?)", [target.id]);
            const embed = new MessageEmbed()
                .setTitle(`Hina - Profile: ${target.tag}`)
                .setThumbnail(target.avatarURL())
                .setDescription(`My very nice description!`)
                .setColor("#3b7fff")
                .addField("Status", "Not set")
                .addField("Twitter", "Not set", true)
                .addField("Twitch", "Not set", true)
                .addField("Steam", "Not set", true)
                .addField("Origin", "Not set", true)
                .addField("Github", "Not set", true);
            return message.channel.send(embed);
        } else {
            const embed = new MessageEmbed()
                .setTitle(`Hina - Profile: ${target.tag}`)
                .setColor("#3b7fff")
                .setThumbnail(target.avatarURL())
                .setDescription(`${result[0].description}`)
                .addField("Status", result[0].status, true)
                .addField("Twitter Username", result[0].twitter, true)
                .addField("Twitch Username", result[0].twitch, true)
                .addField("Steam Username", result[0].steam, true)
                .addField("Origin Username", result[0].origin, true)
                .addField("Github Username", result[0].github, true);
            return message.channel.send(embed);
        }
    });
};
