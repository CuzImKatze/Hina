import { exec } from "child_process";
import { Message, MessageEmbed } from "discord.js";
import { IHinaClient } from "../../hina/HinaClient";

module.exports.run = async (prefix: string, cmd: string, client: IHinaClient, args: string[], message: Message) => {
    if (message.member.id === "292588280304893952") {
        const embed = new MessageEmbed()
            .setTitle("Hina - Update")
            .setColor("#3b7fff")
            .setDescription("Updating....")
            .setFooter("Update by " + message.author.username)
            .setTimestamp();
        message.channel.send(embed);
        exec("git pull", (err, out, stderr) => {
            if (err) {
                const emb1 = new MessageEmbed()
                    .setTitle("Hina Update")
                    .setColor("#3b7fff")
                    .setDescription("Error: " + out)
                    .setFooter("Update by " + message.author.username)
                    .setTimestamp();
                return message.channel.send(emb1);
            } else {
                // tslint:disable-next-line: no-shadowed-variable
                const embed = new MessageEmbed()
                    .setTitle("Hina - Update")
                    .setColor("#3b7fff")
                    .setDescription(`Restarting..... | Log: ${out} | ${stderr} | ${err}`)
                    .setFooter("Update by " + message.author.username)
                    .setTimestamp();
                message.channel.send(embed);
                // tslint:disable-next-line: no-shadowed-variable
                exec("pm2 restart Hina", (err, out, stderr) => {
                    if (err) {
                        console.log(out);
                    } else {
                        return;
                    }
                });
            }
        });
    }
};
