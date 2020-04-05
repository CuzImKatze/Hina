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
const child_process_1 = require("child_process");
module.exports.run = (prefix, cmd, client, args, message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.member.id == "292588280304893952") {
        let embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Update")
            .setDescription("Updating....")
            .setFooter("Update by " + message.author.username)
            .setTimestamp();
        message.channel.send(embed);
        child_process_1.exec("git pull", (err, out, stderr) => {
            if (err) {
                let emb1 = new discord_js_1.MessageEmbed()
                    .setTitle("Hina Update")
                    .setDescription("Error: " + out)
                    .setFooter("Update by " + message.author.username)
                    .setTimestamp();
                return message.channel.send(emb1);
            }
            else {
                let embed = new discord_js_1.MessageEmbed()
                    .setTitle("Hina - Update")
                    .setDescription(`Restarting..... | Log: ${out} | ${stderr} | ${err}`)
                    .setFooter("Update by " + message.author.username)
                    .setTimestamp();
                message.channel.send(embed);
                child_process_1.exec("pm2 restart Hina", (err, out, stderr) => {
                    if (err) {
                        console.log(out);
                    }
                    else {
                        return;
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2RldmVsb3Blci91cGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsaURBQW9DO0FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzlELElBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksb0JBQW9CLEVBQUU7UUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzdCLFFBQVEsQ0FBQyxlQUFlLENBQUM7YUFDekIsY0FBYyxDQUFDLGNBQWMsQ0FBQzthQUM5QixTQUFTLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2pELFlBQVksRUFBRSxDQUFBO1FBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0Isb0JBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ2xDLElBQUcsR0FBRyxFQUFFO2dCQUNKLElBQUksSUFBSSxHQUFHLElBQUkseUJBQVksRUFBRTtxQkFDNUIsUUFBUSxDQUFDLGFBQWEsQ0FBQztxQkFDdkIsY0FBYyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7cUJBQy9CLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7cUJBQ2pELFlBQVksRUFBRSxDQUFBO2dCQUNuQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ2hDO2lCQUFNO2dCQUNILElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTtxQkFDN0IsUUFBUSxDQUFDLGVBQWUsQ0FBQztxQkFDekIsY0FBYyxDQUFDLDBCQUEwQixHQUFHLE1BQU0sTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO3FCQUNwRSxTQUFTLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO3FCQUNqRCxZQUFZLEVBQUUsQ0FBQTtnQkFDZixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDM0Isb0JBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQzFDLElBQUcsR0FBRyxFQUFFO3dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7cUJBQ25CO3lCQUFNO3dCQUNILE9BQU07cUJBQ1Q7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7YUFDTDtRQUNMLENBQUMsQ0FBQyxDQUFBO0tBQ0w7QUFDTCxDQUFDLENBQUEsQ0FBQSJ9