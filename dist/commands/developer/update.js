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
            .setColor("#3b7fff")
            .setDescription("Updating....")
            .setFooter("Update by " + message.author.username)
            .setTimestamp();
        message.channel.send(embed);
        child_process_1.exec("git pull", (err, out, stderr) => {
            if (err) {
                let emb1 = new discord_js_1.MessageEmbed()
                    .setTitle("Hina Update")
                    .setColor("#3b7fff")
                    .setDescription("Error: " + out)
                    .setFooter("Update by " + message.author.username)
                    .setTimestamp();
                return message.channel.send(emb1);
            }
            else {
                let embed = new discord_js_1.MessageEmbed()
                    .setTitle("Hina - Update")
                    .setColor("#3b7fff")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2RldmVsb3Blci91cGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsaURBQW9DO0FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzlELElBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksb0JBQW9CLEVBQUU7UUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzdCLFFBQVEsQ0FBQyxlQUFlLENBQUM7YUFDekIsUUFBUSxDQUFDLFNBQVMsQ0FBQzthQUNuQixjQUFjLENBQUMsY0FBYyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDakQsWUFBWSxFQUFFLENBQUE7UUFDZixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQixvQkFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbEMsSUFBRyxHQUFHLEVBQUU7Z0JBQ0osSUFBSSxJQUFJLEdBQUcsSUFBSSx5QkFBWSxFQUFFO3FCQUM1QixRQUFRLENBQUMsYUFBYSxDQUFDO3FCQUN2QixRQUFRLENBQUMsU0FBUyxDQUFDO3FCQUNuQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztxQkFDL0IsU0FBUyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDakQsWUFBWSxFQUFFLENBQUE7Z0JBQ25CLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDaEM7aUJBQU07Z0JBQ0gsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO3FCQUM3QixRQUFRLENBQUMsZUFBZSxDQUFDO3FCQUN6QixRQUFRLENBQUMsU0FBUyxDQUFDO3FCQUNuQixjQUFjLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7cUJBQ3BFLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7cUJBQ2pELFlBQVksRUFBRSxDQUFBO2dCQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMzQixvQkFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtvQkFDMUMsSUFBRyxHQUFHLEVBQUU7d0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtxQkFDbkI7eUJBQU07d0JBQ0gsT0FBTTtxQkFDVDtnQkFDTCxDQUFDLENBQUMsQ0FBQTthQUNMO1FBQ0wsQ0FBQyxDQUFDLENBQUE7S0FDTDtBQUNMLENBQUMsQ0FBQSxDQUFBIn0=