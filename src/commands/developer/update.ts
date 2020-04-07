import { MessageEmbed } from 'discord.js'
import { exec } from 'child_process'
module.exports.run = async (prefix, cmd, client, args, message) => {
    if(message.member.id == "292588280304893952") {
        let embed = new MessageEmbed()
        .setTitle("Hina - Update")
        .setColor("#3b7fff")
        .setDescription("Updating....")
        .setFooter("Update by " + message.author.username)
        .setTimestamp()
        message.channel.send(embed)
        exec("git pull", (err, out, stderr) =>{
            if(err) {
                let emb1 = new MessageEmbed()
                .setTitle("Hina Update")
                .setColor("#3b7fff")
                .setDescription("Error: " + out)
                .setFooter("Update by " + message.author.username)
                .setTimestamp()
            return message.channel.send(emb1)
            } else {
                let embed = new MessageEmbed()
                .setTitle("Hina - Update")
                .setColor("#3b7fff")
                .setDescription(`Restarting..... | Log: ${out} | ${stderr} | ${err}`)
                .setFooter("Update by " + message.author.username)
                .setTimestamp()
                message.channel.send(embed)
                exec("pm2 restart Hina", (err, out, stderr) =>{
                    if(err) {
                        console.log(out)
                    } else {
                        return
                    }
                })
            }
        })
    }
}