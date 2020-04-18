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
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new discord_js_1.MessageEmbed()
            .setColor("#3b7fff")
            .setTitle(yield client.string(message.guild.id, "language.title"))
            .setDescription(yield client.string(message.guild.id, "noperms"))
            .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
            .setTimestamp();
        return message.channel.send(embed);
    }
    const lang = args[0];
    if (!lang) {
        return message.channel.send(yield client.string(message.guild.id, "language.nolang"));
    }
    if (!client.langs.includes(lang)) {
        return message.channel.send(yield client.string(message.guild.id, "language.nolang"));
    }
    db.query("SELECT * FROM `lang` WHERE guildid = ?", [message.guild.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result.length === 0) {
            db.query("INSERT INTO settings(guildid, lang) VALUES(?, ?)", [message.guild.id, lang]);
            const embed = new discord_js_1.MessageEmbed()
                .setColor("#3b7fff")
                .setTitle(yield client.string(message.guild.id, "language.title"))
                .setDescription((yield client.string(message.guild.id, "language.set")) + lang)
                .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
                .setTimestamp();
            return message.channel.send(embed);
        }
        else {
            db.query("UPDATE lang SET lang = ? WHERE guildid = ?", [lang, message.guild.id]);
            const embed = new discord_js_1.MessageEmbed()
                .setColor("#3b7fff")
                .setTitle(yield client.string(message.guild.id, "language.title"))
                .setDescription((yield client.string(message.guild.id, "language.set")) + lang)
                .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
                .setTimestamp();
            return message.channel.send(embed);
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvY29uZmlndXJhdGlvbi9sYW5ndWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUduRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFPLE1BQWMsRUFBRSxHQUFXLEVBQUUsTUFBbUIsRUFBRSxJQUFjLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO0lBQzlHLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1FBQ2hELE1BQU0sS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUMzQixRQUFRLENBQUMsU0FBUyxDQUFDO2FBQ25CLFFBQVEsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUNqRSxjQUFjLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2hFLFNBQVMsQ0FBQyxDQUFBLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUN2RixZQUFZLEVBQUUsQ0FBQztRQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMs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