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
    const reward = 500;
    const db = client.con;
    const user = message.author;
    const embed = new discord_js_1.MessageEmbed()
        .setTitle(yield client.string(message.guild.id, "daily.title"))
        .setColor("#3b7fff")
        .setDescription(yield client.string(message.guild.id, "daily.get"))
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    const embed1 = new discord_js_1.MessageEmbed()
        .setTitle(yield client.string(message.guild.id, "daily.title"))
        .setColor("#3b7fff")
        .setDescription(yield client.string(message.guild.id, "daily.already"))
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    db.query("SELECT * FROM `cooldowns` WHERE id = ? LIMIT 1", [user.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
        if (!result[0]) {
            const date = new Date();
            db.query("INSERT INTO `cooldowns` (id, date) VALUES (?, ?)", [user.id, date]);
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
            if (difference >= 86400000) {
                db.query("SELECT * FROM credits WHERE id = ? LIMIT 1;", [user.id], (error, result) => {
                    db.query("UPDATE cooldowns SET date = ? WHERE id = ?", [new Date(), user.id]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFpbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvZWNvbm9teS9kYWlseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUduRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFPLE1BQWMsRUFBRSxHQUFXLEVBQUUsTUFBbUIsRUFBRSxJQUFjLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO0lBQzlHLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNuQixNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO1NBQzNCLFFBQVEsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDOUQsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUNuQixjQUFjLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ2xFLFNBQVMsQ0FBQyxDQUFBLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUN2RixZQUFZLEVBQUUsQ0FBQztJQUVwQixNQUFNLE1BQU0sR0FBRyxJQUFJLHlCQUFZLEVBQUU7U0FDNUIsUUFBUSxDQUFDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUM5RCxRQUFRLENBQUMsU0FBUyxDQUFDO1NBQ25CLGNBQWMsQ0FBQyxN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