import { Message, MessageEmbed } from "discord.js";
import * as moment from "moment";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    if (message.member.id != "292588280304893952") return
    let compare = (a, b) => {
        if (a.position > b.position) return -1;
        if (a.position < b.position) return 1;
        return 0;
    }
    let embed = new MessageEmbed()
    .setTitle("Hina - Servers")
    .setDescription(client.guilds.cache.sort(compare).map(server => `\`${server.name}\`\``).join("\n").substr(0, 2000))
    .setTimestamp()
    return message.channel.send(embed)
}