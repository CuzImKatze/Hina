import { MessageEmbed, version } from 'discord.js'
import * as os from 'os'
module.exports.run = async (prefix, cmd, client, args, message) => {
    if(message.member.id != "292588280304893952") return

    let t = new Date(client.uptime);
    let months = t.getUTCMonth();
    let days = t.getUTCDate() - 1;
    let minutes = t.getUTCMinutes();
    let hours = t.getUTCHours();
    let seconds = t.getUTCSeconds();
    let uptime = `${months}mo, ${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
    let ping = `${Math.round(client.ws.ping)}ms`;
    let embed = new MessageEmbed()
    .setTitle("Hina - Dev Infos")
    .setColor("#3b7fff")
    .addField("Name", "Hina")
    .addField("Ping", ping)
    .addField("DJS Version", version)
    .addField("Noder Version", process.version)
    .addField("CPU", os.cpus()[0].model.split("@")[0])
    .addField("RAM", `${((os.totalmem() - os.freemem()) / 1.074e+9).toFixed(2)}GiB / ${(os.totalmem() / 1.074e+9).toFixed(2)}GiB`)
    .addField("Uptime", uptime)
    return message.channel.send(embed)
}