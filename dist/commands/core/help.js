"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs = require("fs");
module.exports.run = (prefix, cmd, client, args, message) => __awaiter(void 0, void 0, void 0, function* () {
    let embed = new discord_js_1.MessageEmbed();
    embed.setTitle(yield client.string(message.guild.id, "help.title"))
        .setColor("#3b7fff")
        .addField("⚙Core", genHelpCategory("core", prefix))
        .addField("🎉Fun", genHelpCategory("fun", prefix))
        .addField("🔨Utilities", genHelpCategory("utilties", prefix))
        .addField("💵Economy", genHelpCategory("economy", prefix));
    if (message.member.hasPermission("BAN_MEMBERS") || message.member.hasPermission("KICK_MEMBERS")) {
        embed.addField("⚖Moderation", genHelpCategory("moderation", prefix));
    }
    if (message.member.hasPermission("MANAGE_GUILD")) {
        embed.addField("🛠Configuration", genHelpCategory("configuration", prefix));
    }
    if (message.member.id == "292588280304893952") {
        embed.addField("💻Developer", genHelpCategory("developer", prefix));
    }
    embed.setFooter("Requested by " + message.author.username);
    embed.setTimestamp();
    return message.channel.send(embed);
});
function genHelpCategory(category, prefix) {
    if (!category)
        return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9jb3JlL2hlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMseUJBQXdCO0FBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ2hFLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRSxDQUFBO0lBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2xFLFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDbkIsUUFBUSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2xELFFBQVEsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqRCxRQUFRLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUQsUUFBUSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFJMUQsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBQztRQUMvRixLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7S0FDckU7SUFDRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQy9DLEtBQUssQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0tBQzVFO0lBQ0QsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7S0FDcEU7SUFDQyxLQUFLLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzFELEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3RDLENBQUMsQ0FBQSxDQUFBO0FBQ0QsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLE1BQU07SUFDckMsSUFBRyxDQUFDLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUMzQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2RCxLQUFLLElBQUksV0FBVyxJQUFJLEtBQUssRUFBRTtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUN4RDtJQUNELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMifQ==