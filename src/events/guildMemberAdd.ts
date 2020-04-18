import { GuildMember, MessageEmbed } from "discord.js";
import { IHinaClient } from "../hina/HinaClient";

module.exports = async (client: IHinaClient, member: GuildMember) => {
    const db = client.con;
    db.query("SELECT * FROM `settings` WHERE id = ?", [member.guild.id], async (error, result) => {
        if (result.length === 0) { return; }
        if (result[0].welcomechannel === "none") {
            return;
        } else {
            const wec: any = member.guild.channels.cache.get(result[0].welcomechannel);
            const user = member.user.tag;
            const server = member.guild.name;
            const embed = new MessageEmbed()
                .setTitle("Welcome")
                .setThumbnail(member.user.avatarURL());
            if (result[0].welcomemessage === "none") {
                embed.setDescription(`Welcome, ${user} to ${server}!`);
            } else {
                embed.setDescription(
                    (await result[0].welcomemessage).replace("${user}", user).replace("${server}", server));
            }
            return wec.send(embed);
        }
    });
};
