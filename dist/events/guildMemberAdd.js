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
    const db = client.con;
    db.query("SELECT * FROM `settings` WHERE id = ?", [member.guild.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result.length === 0) {
            return;
        }
        if (result[0].welcomechannel === "none") {
            return;
        }
        else {
            const wec = member.guild.channels.cache.get(result[0].welcomechannel);
            const user = member.user.tag;
            const server = member.guild.name;
            const embed = new discord_js_1.MessageEmbed()
                .setTitle("Welcome")
                .setThumbnail(member.user.avatarURL());
            if (result[0].welcomemessage === "none") {
                embed.setDescription(`Welcome, ${user} to ${server}!`);
            }
            else {
                embed.setDescription((yield result[0].welcomemessage).replace("${user}", user).replace("${server}", server));
            }
            return wec.send(embed);
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRNZW1iZXJBZGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXZlbnRzL2d1aWxkTWVtYmVyQWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXVEO0FBR3ZELE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBTyxNQUFtQixFQUFFLE1BQW1CLEVBQUUsRUFBRTtJQUNoRSxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQU8sS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3pGLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDcEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxLQUFLLE1BQU0sRUFBRTtZQUNyQyxPQUFPO1NBQ1Y7YUFBTTtZQUNILE1BQU0sR0FBRyxHQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzNFLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzdCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTtpQkFDM0IsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUMzQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEtBQUssTUFBTSxFQUFFO2dCQUNyQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksSUFBSSxPQUFPLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0gsS0FBSyxDQUFDLGNBQWMsQ0FDaEIsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMvRjtZQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQyJ9