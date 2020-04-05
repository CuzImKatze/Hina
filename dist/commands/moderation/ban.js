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
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        let embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Ban")
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
        .setTitle("Hina - Ban")
        .setDescription((yield client.string(message.guild.id, "moderation.ban")) + target.username + (yield client.string(message.guild.id, "moderation.kick2")) + reason)
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    let reply = yield message.channel.send(embed1);
    let yes = yield reply.react("✅");
    let no = yield reply.react("❌");
    let collector = reply.createReactionCollector((reaction, user) => reaction.emoji.name === "✅" && user.id == message.author.id, { time: 12000 });
    collector.on("collect", (r) => __awaiter(void 0, void 0, void 0, function* () {
        let embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Ban")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL21vZGVyYXRpb24vYmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTREO0FBQzVELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ2xFLElBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUM3QyxJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDN0IsUUFBUSxDQUFDLFlBQVksQ0FBQzthQUN0QixjQUFjLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2hFLFNBQVMsQ0FBQyxDQUFBLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUN2RixZQUFZLEVBQUUsQ0FBQTtRQUNmLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDcEM7SUFDRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUMzQyxJQUFHLENBQUMsTUFBTTtRQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtJQUNyRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENB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