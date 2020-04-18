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
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Ban")
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
        .setTitle("Hina - Ban")
        .setDescription((yield client.string(message.guild.id, "moderation.ban")) +
        target.username + (yield client.string(message.guild.id, "moderation.kick2")) + reason)
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    const reply = yield message.channel.send(embed1);
    const yes = yield reply.react("✅");
    const no = yield reply.react("❌");
    const collector = reply.createReactionCollector((reaction, user) => reaction.emoji.name === "✅" && user.id === message.author.id, { time: 12000 });
    collector.on("collect", (r) => __awaiter(void 0, void 0, void 0, function* () {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Ban")
            .addField("User", target.username)
            .addField(yield client.string(message.guild.id, "moderation.reason"), reason)
            .addField("Moderator", message.author.username)
            .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
            .setTimestamp();
        db.query("SELECT * FROM `settings` WHERE guildid = ?", [message.guild.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
            if (result.length === 0) {
                message.channel.send(embed);
                reply.delete();
                message.guild.member(target).ban({ reason });
            }
            if (result.length === "none") {
                message.channel.send(embed);
                reply.delete();
                message.guild.member(target).ban({ reason });
            }
            else {
                const ch = message.guild.channels.cache.get(result[0].modlog);
                ch.send(embed);
                reply.delete();
                message.guild.member(target).ban({ reason });
            }
        }));
    }));
    const collect = reply.createReactionCollector((reaction, user) => reaction.emoji.name === "❌" && user.id === message.author.id, { time: 12000 });
    collect.on("collect", (r) => __awaiter(void 0, void 0, void 0, function* () {
        return reply.delete();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL21vZGVyYXRpb24vYmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNFO0FBR3RFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBYyxFQUFFLEdBQVcsRUFBRSxNQUFtQixFQUFFLElBQWMsRUFBRSxPQUFnQixFQUFFLEVBQUU7SUFDOUcsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDOUMsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzNCLFFBQVEsQ0FBQyxZQUFZLENBQUM7YUFDdEIsY0FBYyxDQUFDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNoRSxTQUFTLENBQUMsQ0FBQSxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLElBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDdkYsWUFBWSxFQUFFLENBQUM7UUFDcEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QztJQUNELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFD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