import { MessageEmbed } from 'discord.js'
module.exports.run = async (prefix, cmd, client, args, message) => {
    let db = client.con;
    if(!message.member.hasPermission("MANAGE_GUILD")) {
        let embed = new MessageEmbed()
    .setTitle(`Hina - Config: ${message.guild.name}`)
    .setColor("#3b7fff")
    .setDescription(await client.string(message.guild.id, "noperms"))
    .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
    .setTimestamp()
    return message.channel.send(embed)
    }
    let values = ["set", "delete"]
    let values2 = ["modlog", "welcomechannel", "leavechannel", "welcomemessage", "leavemessage"]
    let value = args[0]
    let value2 = args[1]
    if(!values.includes(value)) {
    db.query("SELECT * FROM `settings` WHERE id = ?", [message.guild.id], async (error, result) => {
        if(result.length == 0) {
            db.query("INSERT INTO settings (id) VALUES (?)", [message.guild.id])
            let embed = new MessageEmbed()
            .setTitle(`Hina - Config: ${message.guild.name}`)
            .setColor("#3b7fff")
            .setDescription(await client.string(message.guild.id, "config.info"))
            .setThumbnail(message.guild.iconURL())
            .addField("Modlog", "None")
            .addField("WelcomeChannel", "None")
            .addField("LeaveChanel", "None")
            .addField("WelcomeMessage", "none")
            .addField("LeaveMessage", "none")
            .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
            .setTimestamp()
            db.query("INSERT INTO settings (id) VALUES(?)", [message.guild.id])
                return message.channel.send(embed)
        } else {
            let embed = new MessageEmbed()
            .setTitle(`Hina - Config: ${message.guild.name}`)
            .setColor("#3b7fff")
            .setDescription(await client.string(message.guild.id, "config.info"))
            .setThumbnail(message.guild.iconURL())
            .addField("Modlog", result[0].modlog)
            .addField("WelcomeChannel", result[0].welcomechannel)
            .addField("LeaveChanel", result[0].leavechannel)
            .addField("WelcomeMessage", result[0].welcomechannel)
            .addField("LeaveMessage", result[0].leavechannel)
            .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
            .setTimestamp()
                return message.channel.send(embed)
        }
    })
  } else {
      if(!values2.includes(value2)) return message.channel.send(await client.string(message.guild.id, "config.error"))
    db.query("SELECT * FROM `settings` WHERE id = ?", [message.guild.id], async (error, result) => {
        if(result.length == 0) {
            if(value.includes("set")) {
                if(value2.includes("modlog")) {
                    let text = message.mentions.channel.first()
                    if(!text) return message.channel.send(await client.string(message.guild.id, "config.nochannel"))
                    db.query("INSERT INTO settings (id, modlog) VALUES(?, ?)", [message.guild.id, text.id])
                    return message.react("✅")
                }
                if(value2.includes("welcomechannel")) {
                    let text = message.mentions.channel.first()
                    if(!text) return message.channel.send(await client.string(message.guild.id, "config.nochannel"))
                    db.query("INSERT INTO settings (id, welcomechannel) VALUES(?, ?)", [message.guild.id, text.id])
                    return message.react("✅")
                }
                if(value2.includes("leavechannel")) {
                    let text = message.mentions.channels.first()
                    if(!text) return message.channel.send(await client.string(message.guild.id, "config.nochannel"))
                    db.query("INSERT INTO settings (id, leavechannel) VALUES(?, ?)", [message.guild.id, text.id])
                    return message.react("✅")
                }
                let text = args.join(2).slice(" ")
                db.query("INSERT INTO settings (id, " + value2 +") VALUES(?, ?)", [message.guild.id, text])
                return message.react("✅")
            } else {
                if(value2.includes("modlog")) {
                    
                    db.query("INSERT INTO settings (id, modlog) VALUES(?, ?)", [message.guild.id, "none"])
                    return message.react("✅")
                }
                if(value2.includes("welcomechannel")) {
                    
                    db.query("INSERT INTO settings (id, welcomechannel) VALUES(?, ?)", [message.guild.id, "none"])
                    return message.react("✅")
                }
                if(value2.includes("leavechannel")) {
                    
                    db.query("INSERT INTO settings (id, leavechannel) VALUES(?, ?)", [message.guild.id, "none"])
                    return message.react("✅")
                }
    
                db.query("INSERT INTO settings (id, " + value2 +") VALUES(?, ?)", [message.guild.id, "none"])
                return message.react("✅")
            }
        } else {

            if(value.includes("set")) {
                if(value2.includes("modlog")) {
                    let text = message.mentions.channel.first()
                    if(!text) return message.channel.send(await client.string(message.guild.id, "config.nochannel"))
                    db.query("UPDATE settings SET modlog = ? WHERE id = ?", [text.id, message.guild.id])
                    return message.react("✅")
                }
                if(value2.includes("welcomechannel")) {
                    let text = message.mentions.channel.first()
                    if(!text) return message.channel.send(await client.string(message.guild.id, "config.nochannel"))
                    db.query("UPDATE settings SET welcomechannel = ? WHERE id = ?", [text.id, message.guild.id])
                    return message.react("✅")
                }
                if(value2.includes("leavechannel")) {
                    let text = message.mentions.channels.first()
                    if(!text) return message.channel.send(await client.string(message.guild.id, "config.nochannel"))
                    db.query("UPDATE settings SET leavechannel = ? WHERE id = ?", [text.id, message.guild.id])
                    return message.react("✅")
                }
                let text = args.join(2).slice(" ")
                if(!text) return message.channel.send(await client.string(message.guild.id, "config.notext"))
                db.query("UPDATE settings SET " + value2 + " = ? WHERE id = ?", [text, message.guild.id])
                return message.react("✅")
            } else {
                if(value2.includes("modlog")) {
                    
                    db.query("UPDATE settings SET modlog = ? WHERE id = ?", ["none", message.guild.id])
                    return message.react("✅")
                }
                if(value2.includes("welcomechannel")) {
                    
                    db.query("UPDATE settings SET welcomechannel = ? WHERE id = ?", ["none", message.guild.id])
                    return message.react("✅")
                }
                if(value2.includes("leavechannel")) {
                    
                    db.query("UPDATE settings SET leavechannel = ? WHERE id = ?", ["none", message.guild.id])
                    return message.react("✅")
                }
                db.query("INSERT INTO settings (id, " + value2 +") VALUES(?, ?)", [message.guild.id, "none"])
                return message.react("✅")
        }
      }
    });
  }
}