import { MessageEmbed } from 'discord.js'
module.exports.run = async (prefix, cmd, client, args, message) => {
    let db = client.con;
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        let embed = new MessageEmbed()
        .setColor("#3b7fff")
    .setTitle(await client.string(message.guild.id, "language.title"))
    .setDescription(await client.string(message.guild.id, "noperms"))
    .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
    .setTimestamp()
    return message.channel.send(embed)
    }
    let lang = args[0]
    if(!lang) return message.channel.send(await client.string(message.guild.id, "language.nolang"))
    if(!client.langs.includes(lang)) return message.channel.send(await client.string(message.guild.id, "language.nolang"))
    db.query("SELECT * FROM `lang` WHERE guildid = ?", [message.guild.id], async (error, result) => {
        if(result.length == 0) {
            db.query("INSERT INTO settings(guildid, lang) VALUES(?, ?)", [message.guild.id, lang]);
            let embed = new MessageEmbed()
            .setColor("#3b7fff")
            .setTitle(await client.string(message.guild.id, "language.title"))
            .setDescription(await client.string(message.guild.id, "language.set") + lang)
            .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
            .setTimestamp()
            return message.channel.send(embed)
        } else {
            db.query("UPDATE lang SET lang = ? WHERE guildid = ?", [lang, message.guild.id]);
            let embed = new MessageEmbed()
            .setColor("#3b7fff")
            .setTitle(await client.string(message.guild.id, "language.title"))
            .setDescription(await client.string(message.guild.id, "language.set") + lang)
            .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
            .setTimestamp()
            return message.channel.send(embed)
        }
    })
}