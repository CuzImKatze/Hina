import { Message, MessageEmbed } from "discord.js";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    const db = client.con;
    const taggs = ["description", "status", "twitter", "twitch", "steam", "origin", "github"];
    const tagg = args[0];
    const value = args.slice(1).join(" ");
    if (!value) { return message.channel.send(await client.string(message.guild.id, "profile.novalue")); }
    if (!taggs.includes(tagg)) {
        return message.channel.send(await client.string(message.guild.id, "profile.error"));
    } else {
        db.query("UPDATE profile SET " + tagg + " = ? WHERE id = ?", [value, message.member.id]);
        return message.channel.send(tagg + await client.string(message.guild.id, "profile.done") + value);
    }

};
