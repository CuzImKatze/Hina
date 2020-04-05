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
module.exports.run = (prefix, cmd, client, args, message) => __awaiter(void 0, void 0, void 0, function* () {
    let embed = new discord_js_1.MessageEmbed()
        .setTitle(yield client.string(message.guild.id, "botinfo.title"))
        .setColor("#3b7fff")
        .addField("Name", client.user.username)
        .setThumbnail(client.user.avatarURL())
        .addField("Developer", "DieKatze", true)
        .addField("Library", "Discord.js", true)
        .addField("Discord.js Version", discord_js_1.version, true)
        .addField("Node Version", process.version, true)
        .addField("Guilds", client.guilds.cache.size, true)
        .addField("Users", client.users.cache.size, true)
        .addField("Botinvite", "[Invite](https://bit.ly/2tr30Oi)", true)
        .addField("Support Server", "[Join](https://discord.gg/8Fjkvr4)", true)
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    return message.channel.send(embed);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9jb3JlL2JvdGluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBTyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDOUQsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO1NBQzdCLFFBQVEsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDaEUsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUNuQixRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3JDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQztTQUN2QyxRQUFRLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUM7U0FDdkMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLG9CQUFPLEVBQUUsSUFBSSxDQUFDO1NBQzdDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDL0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQ2xELFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztTQUNoRCxRQUFRLENBQUMsV0FBVyxFQUFFLGtDQUFrQyxFQUFFLElBQUksQ0FBQztTQUMvRCxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsb0NBQW9DLEVBQUUsSUFBSSxDQUFDO1NBQ3RFLFNBQVMsQ0FBQyxDQUFBLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUN2RixZQUFZLEVBQUUsQ0FBQztJQUVoQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3RDLENBQUMsQ0FBQSxDQUFBIn0=