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
const os = require("os");
module.exports.run = (prefix, cmd, client, args, message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.member.id !== "292588280304893952") {
        return;
    }
    const t = new Date(client.uptime);
    const months = t.getUTCMonth();
    const days = t.getUTCDate() - 1;
    const minutes = t.getUTCMinutes();
    const hours = t.getUTCHours();
    const seconds = t.getUTCSeconds();
    const uptime = `${months}mo, ${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
    const ping = `${Math.round(client.ws.ping)}ms`;
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("Hina - Dev Infos")
        .setColor("#3b7fff")
        .addField("Name", "Hina")
        .addField("Ping", ping)
        .addField("DJS Version", discord_js_1.version)
        .addField("Node Version", process.version)
        .addField("CPU", os.cpus()[0].model.split("@")[0])
        .addField("RAM", `${((os.totalmem() - os.freemem()) / 1.074e+9).toFixed(2)}GiB / ${(os.totalmem() / 1.074e+9).toFixed(2)}GiB`)
        .addField("Uptime", uptime);
    return message.channel.send(embed);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aW5mb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvZGV2ZWxvcGVyL2RldmluZm9zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTREO0FBQzVELHlCQUF5QjtBQUd6QixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFPLE1BQWMsRUFBRSxHQUFXLEVBQUUsTUFBbUIsRUFBRSxJQUFjLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO0lBQzlHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssb0JBQW9CLEVBQUU7UUFBRSxPQUFPO0tBQUU7SUFFM0QsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLElBQUksTUFBTSxLQUFLLE1BQU0sT0FBTyxNQUFNLE9BQU8sR0FBRyxDQUFDO0lBQzVFLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFL0MsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO1NBQzNCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztTQUM1QixRQUFRLENBQUMsU0FBUyxDQUFDO1NBQ25CLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1NBQ3hCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO1NBQ3RCLFFBQVEsQ0FBQyxhQUFhLEVBQUUsb0JBQU8sQ0FBQztTQUNoQyxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDekMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRCxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDN0gsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDIn0=