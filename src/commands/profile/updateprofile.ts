import { MessageEmbed } from 'discord.js'
module.exports.run = async (prefix, cmd, client, args, message) => {
    let db = client.con
    let taggs = ["description", "status", "twitter", "twitch", "steam", "origin", "github"]
    let tagg = args[0]
    let value = args.slice(1).join(" ")
    if(!value) return message.channel.send(await client.string(message.guild.id, "profile.novalue"))
    if(!taggs.includes(tagg)) {
        return message.channel.send(await client.string(message.guild.id, "profile.error"))
    } else {
        db.query("UPDATE profile SET " + tagg + " = ? WHERE id = ?", [value, message.member.id])
        return message.channel.send(tagg + await client.string(message.guild.id, "profile.done") + value)
    }

}