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
    const embed = new discord_js_1.MessageEmbed();
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
    if (message.member.id === "292588280304893952") {
        embed.addField("💻Developer", genHelpCategory("developer", prefix));
    }
    embed.setFooter("Requested by " + message.author.username);
    embed.setTimestamp();
    return message.channel.send(embed);
});
function genHelpCategory(category, prefix) {
    if (!category) {
        return false;
    }
    let text = "";
    const group = fs.readdirSync(`./commands/${category}`);
    for (const commandFile of group) {
        if (!commandFile.endsWith(".js")) {
            return;
        }
        text += " `" + prefix + commandFile.split(".")[0] + "`,";
    }
    text = text.slice(0, -1);
    return text;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9jb3JlL2hlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQseUJBQXlCO0FBR3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBYyxFQUFFLEdBQVcsRUFBRSxNQUFtQixFQUFFLElBQWMsRUFBRSxPQUFnQixFQUFFLEVBQUU7SUFDOUcsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFLENBQUM7SUFDakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDOUQsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUNuQixRQUFRLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEQsUUFBUSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2pELFFBQVEsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM1RCxRQUFRLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUkvRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQzdGLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN4RTtJQUNELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDOUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDL0U7SUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLG9CQUFvQixFQUFFO1FBQzVDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN2RTtJQUNELEtBQUssQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUM7QUFFRixTQUFTLGVBQWUsQ0FBQyxRQUFnQixFQUFFLE1BQWM7SUFDckQsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUFFLE9BQU8sS0FBSyxDQUFDO0tBQUU7SUFDaEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkQsS0FBSyxNQUFNLFdBQVcsSUFBSSxLQUFLLEVBQUU7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDNUQ7SUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDIn0=