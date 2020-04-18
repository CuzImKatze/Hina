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
    let user = message.mentions.users.first();
    if (!user) {
        user = message.author;
    }
    if (user.bot) {
        return message.channel.send(yield client.string(message.guild.id, "economy.bots"));
    }
    db.query("SELECT * FROM `credits` WHERE id = ?", [user.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result.length === 0) {
            db.query("INSERT INTO `credits` (id, credits) VALUES (?, ?)", [user.id, 0]);
            const embed = new discord_js_1.MessageEmbed()
                .setTitle("Hina - Coins")
                .setColor("#3b7fff")
                .setDescription(user.tag +
                (yield client.string(message.guild.id, "economy.has")) + "0" +
                (yield client.string(message.guild.id, "economy.coins")))
                .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
                .setTimestamp();
            return message.channel.send(embed);
        }
        else {
            const embed = new discord_js_1.MessageEmbed()
                .setTitle("Hina - Coins")
                .setColor("#3b7fff")
                .setDescription(user.tag +
                (yield client.string(message.guild.id, "economy.has")) +
                result[0].credits + (yield client.string(message.guild.id, "economy.coins")))
                .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
                .setTimestamp();
            return message.channel.send(embed);
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29pbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvZWNvbm9teS9jb2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUduRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFPLE1BQWMsRUFBRSxHQUFXLEVBQUUsTUFBbUIsRUFBRSxJQUFjLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO0lBQzlHLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFFdEIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUFFLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0tBQUU7SUFDckMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1YsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztLQUN0RjtJQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBTyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDaEYsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLE1BQU0sS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTtpQkFDM0IsUUFBUSxDQUFDLGNBQWMsQ0FBQztpQkFDeEIsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHO2lCQUNwQixNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUEsR0FBRyxHQUFHO2lCQUMxRCxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUEsQ0FBQztpQkFDMUQsU0FBUyxDQUFDLENBQUEsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2lCQUN2RixZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDSCxNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7aUJBQzNCLFFBQVEsQ0FBQyxjQUFjLENBQUM7aUJBQ3hCLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRztpQkFDcEIsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFBO2dCQUNwRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQSxDQUFDO2lCQUM5RSxTQUFTLENBQUMsQ0FBQSxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLElBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7aUJBQ3ZGLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMifQ==