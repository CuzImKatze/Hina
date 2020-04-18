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
const child_process_1 = require("child_process");
const discord_js_1 = require("discord.js");
module.exports.run = (prefix, cmd, client, args, message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.member.id === "292588280304893952") {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle("Hina - Update")
            .setColor("#3b7fff")
            .setDescription("Updating....")
            .setFooter("Update by " + message.author.username)
            .setTimestamp();
        message.channel.send(embed);
        child_process_1.exec("git pull", (err, out, stderr) => {
            if (err) {
                const emb1 = new discord_js_1.MessageEmbed()
                    .setTitle("Hina Update")
                    .setColor("#3b7fff")
                    .setDescription("Error: " + out)
                    .setFooter("Update by " + message.author.username)
                    .setTimestamp();
                return message.channel.send(emb1);
            }
            else {
                const embed = new discord_js_1.MessageEmbed()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2RldmVsb3Blci91cGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBcUM7QUFDckMsMkNBQW1EO0FBR25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBYyxFQUFFLEdBQVcsRUFBRSxNQUFtQixFQUFFLElBQWMsRUFBRSxPQUFnQixFQUFFLEVBQUU7SUFDOUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxvQkFBb0IsRUFBRTtRQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDM0IsUUFBUSxDQUFDLGVBQWUsQ0FBQzthQUN6QixRQUFRLENBQUMsU0FBUyxDQUFDO2FBQ25CLGNBQWMsQ0FBQyxjQUFjLENBQUM7YUFDOUIsU0FBUyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNqRCxZQUFZLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixvQkFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsTUFBTSxJQUFJLEdBQUcsSUFBSSx5QkFBWSxFQUFFO3FCQUMxQixRQUFRLENBQUMsYUFBYSxDQUFDO3FCQUN2QixRQUFRLENBQUMsU0FBUyxDQUFDO3FCQUNuQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztxQkFDL0IsU0FBUyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDakQsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7aUJBQU07Z0JBRUgsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO3FCQUMzQixRQUFRLENBQUMsZUFBZSxDQUFDO3FCQUN6QixRQUFRLENBQUMsU0FBUyxDQUFDO3FCQUNuQixjQUFjLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7cUJBQ3BFLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7cUJBQ2pELFlBQVksRUFBRSxDQUFDO2dCQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFNUIsb0JBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQzFDLElBQUksR0FBRyxFQUFFO3dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3BCO3lCQUFNO3dCQUNILE9BQU87cUJBQ1Y7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDLENBQUEsQ0FBQyJ9