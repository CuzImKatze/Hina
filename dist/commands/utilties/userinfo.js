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
const moment = require("moment");
module.exports.run = (prefix, cmd, client, args, message) => __awaiter(void 0, void 0, void 0, function* () {
    let user = message.mentions.members.first();
    if (!user) {
        user = message.member;
    }
    const compare = (a, b) => {
        if (a.position > b.position) {
            return -1;
        }
        if (a.position < b.position) {
            return 1;
        }
        return 0;
    };
    const embed = new discord_js_1.MessageEmbed()
        .setTitle(user.user.username)
        .setColor("#3b7fff")
        .addField("Name + Tag", user.user.tag, true)
        .addField("ID", user.id, true)
        .addField("Status", user.user.presence.status, true);
    if (user.user.presence.activities) {
        embed.addField("Game", user.user.presence.activities);
    }
    else {
        embed.addField("Game", "-");
    }
    embed.addField(yield client.string(message.guild.id, "userinfo.roles"), user.roles.cache.sort(compare).map((roles) => roles).join(", ").substr(0, 900) || `-`, false);
    embed.addField(yield client.string(message.guild.id, "userinfo.created"), moment(user.user.createdAt).format("dddd, Do MMMM YYYY, HH:mm:ss"))
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    return message.channel.send(embed);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvdXRpbHRpZXMvdXNlcmluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQsaUNBQWlDO0FBR2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBYyxFQUFFLEdBQVcsRUFBRSxNQUFtQixFQUFFLElBQWMsRUFBRSxPQUFnQixFQUFFLEVBQUU7SUFDOUcsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUFFLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0tBQUU7SUFFckMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckIsSUFBSSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDM0MsSUFBSSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQzFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0lBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO1NBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM1QixRQUFRLENBQUMsU0FBUyxDQUFDO1NBQ25CLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1NBQzNDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7U0FDN0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7UUFDL0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDekQ7U0FBTTtRQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLGtCQUFrQixDQUFDLEVBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ3BFLFNBQVMsQ0FBQyxDQUFBLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUN2RixZQUFZLEVBQUUsQ0FBQztJQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDIn0=