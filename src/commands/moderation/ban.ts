import { MessageEmbed, ReactionCollector } from 'discord.js'
module.exports.run = async (prefix, cmd, client, args, message) => {
    let db = client.con;
if(!message.member.hasPermission("BAN_MEMBERS")) {
    let embed = new MessageEmbed()
    .setTitle("Hina - Ban")
    .setDescription(await client.string(message.guild.id, "noperms"))
    .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
    .setTimestamp()
    return message.channel.send(embed)
 }
 let target = message.mentions.users.first()
 if(!target) return message.channel.send(await client.string(message.guild.id, "moderation.nomember"))
 let reason = args.slice(1).join(" ")
 if(!reason) return message.channel.send(await client.string(message.guild.id, "moderation.noreason"))

 let embed1 = new MessageEmbed()
 .setTitle("Hina - Ban")
 .setDescription(await client.string(message.guild.id, "moderation.ban") + target.username + await client.string(message.guild.id, "moderation.kick2") + reason)
 .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
 .setTimestamp()
 let reply = await message.channel.send(embed1)
 let yes = await reply.react("✅")
 let no = await reply.react("❌")
 let collector = reply.createReactionCollector((reaction, user) => reaction.emoji.name === "✅" && user.id == message.author.id, { time: 12000 });
 collector.on("collect", async (r) => {
     let embed = new MessageEmbed()
     .setTitle("Hina - Ban")
     .addField("User", target.username)
     .addField(await client.string(message.guild.id, "moderation.reason"), reason)
     .addField("Moderator", message.author.username)
     .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
     .setTimestamp()
     db.query("SELECT * FROM `settings` WHERE guildid = ?", [message.guild.id], async (error, result) => {
        if(result.length == 0) return
        if(result.lenght == "none"){ 
        message.channel.send(embed)
        reply.delete()
         message.guild.member(target).ban(reason)
        } else {
            let ch = message.guild.channels.cache.get(result[0].modlog);
            ch.send(embed)
        reply.delete()
         message.guild.member(target).ban(reason)
        }
     })
 })
 let collect = reply.createReactionCollector((reaction, user) => reaction.emoji.name === "❌" && user.id == message.author.id, { time: 12000 });
 collect.on("collect", async (r) => {
     return reply.delete()
 })
}