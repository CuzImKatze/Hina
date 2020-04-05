import { MessageEmbed } from 'discord.js'
module.exports.run = async (prefix, cmd, client, args, message) => {
    let db = client.con;
    db.query("SELECT * FROM `credits` WHERE id = ?", [message.member.id], async (error, result) =>{
        if(result.length == 0) {
            db.query("INSERT INTO `credits` (id, credits)")
        }
    })
}