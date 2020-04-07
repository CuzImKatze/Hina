import { MessageEmbed } from 'discord.js'
import * as fs from 'fs'
module.exports.run = async (prefix, cmd, client, args, message) => {
  let embed = new MessageEmbed()
    embed.setTitle(await client.string(message.guild.id, "help.title"))
    .setColor("#3b7fff")
    .addField("⚙Core", genHelpCategory("core", prefix))
    .addField("🎉Fun", genHelpCategory("fun", prefix))
    //.addField("🔨Utilities", genHelpCategory("utilities", prefix))
    .addField("💵Economy", genHelpCategory("economy", prefix))
    //.addField("🌐Globalchat",genHelpCategory("globalchat", prefix) )
    //.addField("📦Mysterybox", genHelpCategory("mysterybox", prefix))
    //.addField("🎵Music", genHelpCategory("music", prefix))
    if(message.member.hasPermission("BAN_MEMBERS") || message.member.hasPermission("KICK_MEMBERS")){
    embed.addField("⚖Moderation", genHelpCategory("moderation", prefix))
  }
  if(message.member.hasPermission("MANAGE_GUILD")) {
    embed.addField("🛠Configuration", genHelpCategory("configuartion", prefix))
  }
  if(message.member.id == "292588280304893952") {
    embed.addField("💻Developer", genHelpCategory("developer", prefix))
  }
    embed.setFooter("Requested by " + message.author.username)
    embed.setTimestamp()
    return message.channel.send(embed)
}
function genHelpCategory(category, prefix) {
    if(!category) return false;
    let text = "";
    let group = fs.readdirSync(`./commands/${category}`);
  for (let commandFile of group) {
    if (!commandFile.endsWith(".js")) {
      return;
    }
    text += " `" + prefix + commandFile.split(".")[0] + "`,";
    }
    text = text.slice(0, -1);
    return text;
}