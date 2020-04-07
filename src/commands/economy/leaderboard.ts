import { MessageEmbed } from 'discord.js'
module.exports.run = async (prefix, cmd, client, args, message) => {
    let db = client.con;
    db.query("SELECT * FROM credits ORDER BY credits DESC LIMIT 10", [], async(err, results) => {
        
        let text = "";
        let user;
        for (let r of results){
            user = await client.users.cache.get(r.id)
            if (user) {
                text += user.tag + ": " + r.credits + "\n";
            } else {
                text += "Unknown#0000" + ": " + r.credits + "\n";
            }
        }
        let embed = new MessageEmbed()
        .setColor("#3b7fff")
        .setTitle(await client.string(message.guild.id, "leaderboard.title"))
        .setDescription(text)
        .setFooter(await client.string(message.guild.id, "requested") + message.author.username)
        .setTimestamp()
        return message.channel.send(embed)
    })
}