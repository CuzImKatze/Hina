import { MessageEmbed } from 'discord.js'
module.exports = async (client, member) => {
    let db = client.con;
    db.query("SELECT * FROM `settings` WHERE id = ?", [member.guild.id], async (error, result) => {
        console.log(1)
        if(result.length == 0) return
        console.log(2)
        if(result[0].welcomechannel == "none") {
            console.log(3)
            return
        } else {
            console.log(4)
            let wec = member.guild.channels.cache.get(result[0].welcomechannel);
            let user = member.user.tag
            let server = member.guild.name
            console.log(5)
            let embed = new MessageEmbed()
            .setTitle("Welcome")
            .setThumbnail(member.user.avatarURL())
            if(result[0].welcomemessage == "none") {
                embed.setDescription(`Welcome, ${user} to ${server}!`)
            } else {
                embed.setDescription((await result[0].welcomemessage).replace("${user}", user).replace("${server}", server))
            }
            console.log(6)
            return wec.send(embed)
        }
    })
}