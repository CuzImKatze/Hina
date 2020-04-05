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
        .addField("⚙Core", genHelpCategory("core", prefix));
    if (message.member.hasPermission("BAN_MEMBERS") || message.member.hasPermission("KICK_MEMBERS")) {
        embed.addField("⚖Moderation", genHelpCategory("moderation", prefix));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9jb3JlL2hlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMseUJBQXdCO0FBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ2hFLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRSxDQUFBO0lBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2xFLFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDbkIsUUFBUSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFPbkQsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBQztRQUMvRixLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7S0FDckU7SUFDRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtLQUNwRTtJQUNDLEtBQUssQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUQsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDdEMsQ0FBQyxDQUFBLENBQUE7QUFDRCxTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsTUFBTTtJQUNyQyxJQUFHLENBQUMsUUFBUTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzNCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNkLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELEtBQUssSUFBSSxXQUFXLElBQUksS0FBSyxFQUFFO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ3hEO0lBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyJ9