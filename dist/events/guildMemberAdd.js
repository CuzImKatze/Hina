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
module.exports = (client, member) => __awaiter(void 0, void 0, void 0, function* () {
    let db = client.con;
    db.query("SELECT * FROM `settings` WHERE id = ?", [member.guild.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result.length == 0)
            return;
        if (result[0].welcomechannel == "none") {
            return;
        }
        else {
            let wec = member.guild.channels.cache.get(result[0].welcomechannel);
            let user = member.user.tag;
            let server = member.guild.name;
            let embed = new discord_js_1.MessageEmbed()
                .setTitle("Welcome")
                .setThumbnail(member.user.avtarURL());
            if (result[0].welcomemessage == "none") {
                embed.setDescription(`Welcome, ${user} to ${server}!`);
            }
            else {
                embed.setDescription((yield result[0].welcomemessage).replace("${user}", user).replace("${server}", server));
            }
            return wec.send(embed);
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRNZW1iZXJBZGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXZlbnRzL2d1aWxkTWVtYmVyQWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBTyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDdEMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNwQixFQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFPLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN6RixJQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU07UUFDN0IsSUFBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLE1BQU0sRUFBRTtZQUNuQyxPQUFNO1NBQ1Q7YUFBTTtZQUNILElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFBO1lBQzFCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO1lBQzlCLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTtpQkFDN0IsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNyQyxJQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksTUFBTSxFQUFFO2dCQUNuQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksSUFBSSxPQUFPLE1BQU0sR0FBRyxDQUFDLENBQUE7YUFDekQ7aUJBQU07Z0JBQ0gsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO2FBQy9HO1lBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3pCO0lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSxDQUFBIn0=