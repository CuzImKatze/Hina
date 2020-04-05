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
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        let embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Kick")
            .setDescription(yield client.string(message.guild.id, "noperms"))
            .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
            .setTimestamp();
        return message.channel.send(embed);
    }
    let target = message.mentions.users.first();
    if (!target)
        return message.channel.send(yield client.string(message.guild.id, "moderation.nomember"));
    let reason = args.slice(1).join(" ");
    if (!reason)
        return message.channel.send(yield client.string(message.guild.id, "moderation.noreason"));
    let embed1 = new discord_js_1.MessageEmbed()
        .setTitle("Hina - Kick")
        .setDescription((yield client.string(message.guild.id, "moderation.kick")) + target.username + (yield client.string(message.guild.id, "moderation.kick2")) + reason)
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    let reply = yield message.channel.send(embed1);
    let yes = yield reply.react("✅");
    let no = yield reply.react("❌");
    let collector = reply.createReactionCollector((reaction, user) => reaction.emoji.name === "✅" && user.id == message.author.id, { time: 12000 });
    collector.on("collect", (r) => __awaiter(void 0, void 0, void 0, function* () {
        let embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Kick")
            .addField("User", target.username)
            .addField(yield client.string(message.guild.id, "moderation.reason"), reason)
            .addField("Moderator", message.author.username)
            .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
            .setTimestamp();
        message.channel.send(embed);
        reply.delete();
        message.guild.member(target).kick(reason);
    }));
    let collect = reply.createReactionCollector((reaction, user) => reaction.emoji.name === "❌" && user.id == message.author.id, { time: 12000 });
    collect.on("collect", (r) => __awaiter(void 0, void 0, void 0, function* () {
        return reply.delete();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9tb2RlcmF0aW9uL2tpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEQ7QUFDNUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBTyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDOUQsSUFBRyxDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQy9DLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUM3QixRQUFRLENBQUMsYUFBYSxDQUFDO2FBQ3ZCLGNBQWMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDaEUsU0FBUyxDQUFDLENBQUEsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ3ZGLFlBQVksRUFBRSxDQUFBO1FBQ2YsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNyQztJQUNELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzNDLElBQUcsQ0FBQyxNQUFNO1FBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFBO0lBQ3JHLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMs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