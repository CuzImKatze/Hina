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
    if (message.member.id == "292588280304893952") {
        let embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Restart")
            .setColor("#3b7fff")
            .setDescription("Restarting....")
            .setThumbnail("https://cdn.discordapp.com/attachments/669265222023774240/693223372808781874/image0.gif")
            .setFooter("Restarted by " + message.author.username)
            .setTimestamp();
        message.channel.send(embed);
        setTimeout(() => {
            process.exit(1);
        }, 12000);
    }
    else {
        let embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Restart")
            .setColor("#3b7fff")
            .setThumbnail("https://giphy.com/gifs/rick-roll-lgcUUCXgC8mEo")
            .setTimestamp();
        return message.channel.send(embed);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdGFydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9kZXZlbG9wZXIvcmVzdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUF5QztBQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFPLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUM5RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLG9CQUFvQixFQUFFO1FBQzNDLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUN6QixRQUFRLENBQUMsZ0JBQWdCLENBQUM7YUFDMUIsUUFBUSxDQUFDLFNBQVMsQ0FBQzthQUNuQixjQUFjLENBQUMsZ0JBQWdCLENBQUM7YUFDaEMsWUFBWSxDQUFDLHlGQUF5RixDQUFDO2FBQ3ZHLFNBQVMsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDcEQsWUFBWSxFQUFFLENBQUE7UUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2I7U0FBTTtRQUNILElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUN6QixRQUFRLENBQUMsZ0JBQWdCLENBQUM7YUFDMUIsUUFBUSxDQUFDLFNBQVMsQ0FBQzthQUNuQixZQUFZLENBQUMsZ0RBQWdELENBQUM7YUFDOUQsWUFBWSxFQUFFLENBQUE7UUFDbkIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNyQztBQUNMLENBQUMsQ0FBQSxDQUFBIn0=