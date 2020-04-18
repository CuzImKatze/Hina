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
        .setTitle(`Hina - ${message.guild.name}`)
        .setColor("#3b7fff")
        .setThumbnail(message.guild.iconURL())
        .addField("Name", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Owner", message.guild.owner.user.tag, true)
        .addField(yield client.string(message.guild.id, "guildinfo.verify"), message.guild.verificationLevel, true)
        .addField("User", message.guild.members.cache.filter((members) => !members.user.bot).size, true)
        .addField("Bots", message.guild.members.cache.filter((members) => members.user.bot).size, true)
        .addField("Channel", message.guild.channels.cache.size, true)
        .addField("Region", message.guild.region, true)
        .addField(yield client.string(message.guild.id, "userinfo.roles"), message.guild.roles.cache.sort(compare).map((roles) => roles).join(", ").substr(0, 1000))
        .addField(yield client.string(message.guild.id, "userinfo.created"), moment(message.guild.createdAt).format("dddd, Do MMMM YYYY, HH:mm:ss"))
        .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
        .setTimestamp();
    return message.channel.send(embed);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRpbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3V0aWx0aWVzL2d1aWxkaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUNuRCxpQ0FBaUM7QUFHakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBTyxNQUFjLEVBQUUsR0FBVyxFQUFFLE1BQW1CLEVBQUUsSUFBYyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtJQUM5RyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQixJQUFJLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUMzQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDMUMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDLENBQUM7SUFDRixNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7U0FDM0IsUUFBUSxDQUFDLFVBQVUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QyxRQUFRLENBQUMsU0FBUyxDQUFDO1NBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3JDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO1NBQ3RDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7U0FDckQsUUFBUSxDQUFDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDO1NBQzFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7U0FDL0YsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7U0FDOUYsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztTQUM1RCxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztTQUM5QyxRQUFRLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLEVBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RixRQUFRLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLGtCQUFrQixDQUFDLEVBQy9ELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQzFFLFNBQVMsQ0FBQyxDQUFBLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUN2RixZQUFZLEVBQUUsQ0FBQztJQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDIn0=