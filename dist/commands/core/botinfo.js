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
    const embed = new discord_js_1.MessageEmbed()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9jb3JlL2JvdGluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEQ7QUFHNUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBTyxNQUFjLEVBQUUsR0FBVyxFQUFFLE1BQW1CLEVBQUUsSUFBYyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtJQUM5RyxNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7U0FDM0IsUUFBUSxDQUFDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztTQUNoRSxRQUFRLENBQUMsU0FBUyxDQUFDO1NBQ25CLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDckMsUUFBUSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDO1NBQ3ZDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQztTQUN2QyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsb0JBQU8sRUFBRSxJQUFJLENBQUM7U0FDN0MsUUFBUSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUMvQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7U0FDbEQsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQ2hELFFBQVEsQ0FBQyxXQUFXLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxDQUFDO1NBQy9ELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxvQ0FBb0MsRUFBRSxJQUFJLENBQUM7U0FDdEUsU0FBUyxDQUFDLENBQUEsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ3ZGLFlBQVksRUFBRSxDQUFDO0lBRXBCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMifQ==