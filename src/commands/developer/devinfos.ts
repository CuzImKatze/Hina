import { Message, MessageEmbed, version } from "discord.js";
import * as os from "os";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    if (message.member.id !== "292588280304893952") { return; }

    const t = new Date(client.uptime);
    const months = t.getUTCMonth();
    const days = t.getUTCDate() - 1;
    const minutes = t.getUTCMinutes();
    const hours = t.getUTCHours();
    const seconds = t.getUTCSeconds();
    const uptime = `${months}mo, ${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
    const ping = `${Math.round(client.ws.ping)}ms`;

    const embed = new MessageEmbed()
        .setTitle("Hina - Dev Infos")
        .setColor("#3b7fff")
        .addField("Name", "Hina")
        .addField("Ping", ping)
        .addField("DJS Version", version)
        .addField("Node Version", process.version)
        .addField("CPU", os.cpus()[0].model.split("@")[0])
        .addField("RAM", `${((os.totalmem() - os.freemem()) / 1.074e+9).toFixed(2)}GiB / ${(os.totalmem() / 1.074e+9).toFixed(2)}GiB`)
        .addField("Uptime", uptime);
    return message.channel.send(embed);
};
