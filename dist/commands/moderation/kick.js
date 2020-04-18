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
    const db = client.con;
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Kick")
            .setDescription(yield client.string(message.guild.id, "noperms"))
            .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
            .setTimestamp();
        return message.channel.send(embed);
    }
    const target = message.mentions.users.first();
    if (!target) {
        return message.channel.send(yield client.string(message.guild.id, "moderation.nomember"));
    }
    const reason = args.slice(1).join(" ");
    if (!reason) {
        return message.channel.send(yield client.string(message.guild.id, "moderation.noreason"));
    }
    const embed1 = new discord_js_1.MessageEmbed()
        .setTitle("Hina - Kick")
        .setDescription((yield client.string(message.guild.id, "moderation.kick")) +
        target.username + (yield client.string(message.guild.id, "moderation.kick2")) + reason)
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    const reply = yield message.channel.send(embed1);
    const yes = yield reply.react("✅");
    const no = yield reply.react("❌");
    const collector = reply.createReactionCollector((reaction, user) => reaction.emoji.name === "✅" && user.id === message.author.id, { time: 12000 });
    collector.on("collect", (r) => __awaiter(void 0, void 0, void 0, function* () {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Kick")
            .addField("User", target.username)
            .addField(yield client.string(message.guild.id, "moderation.reason"), reason)
            .addField("Moderator", message.author.username)
            .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
            .setTimestamp();
        db.query("SELECT * FROM `settings` WHERE guildid = ?", [message.guild.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
            if (result.length === 0) {
                message.channel.send(embed);
                reply.delete();
                message.guild.member(target).kick(reason);
            }
            if (result.length === "none") {
                message.channel.send(embed);
                reply.delete();
                message.guild.member(target).kick(reason);
            }
            else {
                const ch = message.guild.channels.cache.get(result[0].modlog);
                ch.send(embed);
                reply.delete();
                message.guild.member(target).kick(reason);
            }
        }));
    }));
    const collect = reply.createReactionCollector((reaction, user) => reaction.emoji.name === "❌" && user.id === message.author.id, { time: 12000 });
    collect.on("collect", (r) => __awaiter(void 0, void 0, void 0, function* () {
        return reply.delete();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9tb2RlcmF0aW9uL2tpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0U7QUFHdEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBTyxNQUFjLEVBQUUsR0FBVyxFQUFFLE1BQW1CLEVBQUUsSUFBYyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtJQUM5RyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUMvQyxNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDM0IsUUFBUSxDQUFDLGFBQWEsQ0FBQzthQUN2QixjQUFjLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2hFLFNBQVMsQ0FBQyxDQUFBLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUN2RixZQUFZLEVBQUUsQ0FBQztRQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQztLQUFFO0lBQzNHLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUUzRyxNQUFNLE1BQU0sR0FBRyxJQUFJLHlCQUFZLEVBQUU7U0FDNUIsUUFBUSxDQUFDLGFBQWEsQ0FBQztTQUN2QixjQUFjLENBQUMsQ0FBQSxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUM7UUFDcEUsTUFBTSxDQUFDLFFBQVEsSUFBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQSxHQUFHLE1BQU0sQ0FBQztTQUN4RixTQUFTLENBQUMsQ0FBQSxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLElBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDdkYsWUFBWSxFQUFFLENBQUM7SUFDcEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsTUFBTSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUMvRCxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBRW5GLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQU8sQ0FBQyxFQUFFLEVBQUU7UUFDaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzNCLFFBQVEsQ0FBQyxhQUFhLENBQUM7YUFDdkIsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2pDLFFBQVEsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxNQUFNLENBQUM7YUFDNUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUM5QyxTQUFTLENBQUMsQ0FBQSxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLElBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDdkYsWUFBWSxFQUFFLENBQUM7UUFFcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBTyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDL0YsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0M7WUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUMxQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDSCxNQUFNLEVBQUUsR0FBUSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdDO1FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDSCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FDN0QsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNuRixPQUFPLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFPLENBQUMsRUFBRSxFQUFFO1FBQzlCLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQyJ9