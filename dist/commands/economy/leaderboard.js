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
    db.query("SELECT * FROM credits ORDER BY credits DESC LIMIT 10", [], (err, results) => __awaiter(void 0, void 0, void 0, function* () {
        let text = "";
        let user;
        for (const r of results) {
            user = yield client.users.cache.get(r.id);
            if (user) {
                text += user.tag + ": " + r.credits + "\n";
            }
            else {
                text += "Unknown#0000" + ": " + r.credits + "\n";
            }
        }
        const embed = new discord_js_1.MessageEmbed()
            .setColor("#3b7fff")
            .setTitle(yield client.string(message.guild.id, "leaderboard.title"))
            .setDescription(text)
            .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
            .setTimestamp();
        return message.channel.send(embed);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvZWNvbm9teS9sZWFkZXJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUduRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFPLE1BQWMsRUFBRSxHQUFXLEVBQUUsTUFBbUIsRUFBRSxJQUFjLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO0lBQzlHLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxzREFBc0QsRUFBRSxFQUFFLEVBQUUsQ0FBTyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFFeEYsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUM7UUFDVCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTtZQUNyQixJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUM5QztpQkFBTTtnQkFDSCxJQUFJLElBQUksY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNwRDtTQUNKO1FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzNCLFFBQVEsQ0FBQyxTQUFTLENBQUM7YUFDbkIsUUFBUSxDQUFDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2FBQ3BFLGNBQWMsQ0FBQyxJQUFJLENBQUM7YUFDcEIsU0FBUyxDQUFDLENBQUEsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ3ZGLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQSxDQUFDIn0=