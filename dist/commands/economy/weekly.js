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
    const reward = 750;
    const db = client.con;
    const user = message.author;
    const embed = new discord_js_1.MessageEmbed()
        .setTitle(yield client.string(message.guild.id, "weekly.title"))
        .setColor("#3b7fff")
        .setDescription(yield client.string(message.guild.id, "weekly.get"))
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    const embed1 = new discord_js_1.MessageEmbed()
        .setTitle(yield client.string(message.guild.id, "weekly.title"))
        .setColor("#3b7fff")
        .setDescription(yield client.string(message.guild.id, "weekly.already"))
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    db.query("SELECT * FROM `cooldownsweekly` WHERE id = ? LIMIT 1", [user.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
        if (!result[0]) {
            const date = new Date();
            db.query("INSERT INTO `cooldownsweekly` (id, date) VALUES (?, ?)", [user.id, date]);
            db.query("SELECT * FROM credits WHERE id = ? LIMIT 1;", [user.id], (error, result) => {
                if (result.length === 0) {
                    db.query("INSERT INTO credits(id, credits) VALUES(?, ?)", [user.id, reward]);
                    message.channel.send(embed);
                }
                else {
                    db.query("SELECT * FROM credits WHERE id = ? LIMIT 1;", [user.id], (error, result) => {
                        db.query("UPDATE credits SET credits = ? WHERE id = ?", [result[0].credits + reward, user.id]);
                        message.channel.send(embed);
                    });
                }
            });
        }
        else {
            const difference = new Date().getTime() - result[0].date;
            if (difference >= 604800000) {
                db.query("SELECT * FROM credits WHERE id = ? LIMIT 1;", [user.id], (error, result) => {
                    db.query("UPDATE cooldownsweekly SET date = ? WHERE id = ?", [new Date(), user.id]);
                    db.query("UPDATE credits SET credits = ? WHERE id = ?", [result[0].credits + reward, user.id]);
                    message.channel.send(embed);
                });
            }
            else {
                message.channel.send(embed1);
            }
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla2x5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2Vjb25vbXkvd2Vla2x5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1EO0FBR25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBYyxFQUFFLEdBQVcsRUFBRSxNQUFtQixFQUFFLElBQWMsRUFBRSxPQUFnQixFQUFFLEVBQUU7SUFDOUcsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ25CLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDdEIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7U0FDM0IsUUFBUSxDQUFDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMvRCxRQUFRLENBQUMsU0FBUyxDQUFDO1NBQ25CLGNBQWMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDbkUsU0FBUyxDQUFDLENBQUEsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ3ZGLFlBQVksRUFBRSxDQUFDO0lBRXBCLE1BQU0sTUFBTSxHQUFHLElBQUkseUJBQVksRUFBRTtTQUM1QixRQUFRLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9ELFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDbkIsY0FBYyxDQUFD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