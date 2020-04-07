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
    let db = client.con;
    let target = message.mentions.users.first();
    if (!target) {
        target = message.author;
    }
    if (target.bot)
        return;
    db.query("SELECT * FROM `profile` WHERE id = ?", [target.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result.length == 0) {
            db.query("INSERT INTO `profile` (id) VALUES (?)", [target.id]);
            let embed = new discord_js_1.MessageEmbed()
                .setTitle(`Hina - Profile: ${target.tag}`)
                .setThumbnail(target.avatarURL())
                .setDescription(`My very nice description!`)
                .setColor("#3b7fff")
                .addField("Status", "Not set")
                .addField("Twitter", "Not set", true)
                .addField("Twitch", "Not set", true)
                .addField("Steam", "Not set", true)
                .addField("Origin", "Not set", true)
                .addField("Github", "Not set", true);
            return message.channel.send(embed);
        }
        else {
            let embed = new discord_js_1.MessageEmbed()
                .setTitle(`Hina - Profile: ${target.tag}`)
                .setColor("#3b7fff")
                .setThumbnail(target.avatarURL())
                .setDescription(`${result[0].description}`)
                .addField("Status", result[0].status, true)
                .addField("Twitter Username", result[0].twitter, true)
                .addField("Twitch Username", result[0].twitch, true)
                .addField("Steam Username", result[0].steam, true)
                .addField("Origin Username", result[0].origin, true)
                .addField("Github Username", result[0].github, true);
            return message.channel.send(embed);
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9wcm9maWxlL3Byb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBTyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDOUQsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUMzQyxJQUFHLENBQUMsTUFBTSxFQUFFO1FBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7S0FBRTtJQUN2QyxJQUFHLE1BQU0sQ0FBQyxHQUFHO1FBQUUsT0FBTTtJQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQU8sS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ2xGLElBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbkIsRUFBRSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQzlELElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTtpQkFDN0IsUUFBUSxDQUFDLG1CQUFtQixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ3pDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2hDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQztpQkFDM0MsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7aUJBQzdCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQztpQkFDcEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDO2lCQUNuQyxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7aUJBQ2xDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQztpQkFDbkMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDcEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNyQzthQUFNO1lBQ0gsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2lCQUM3QixRQUFRLENBQUMsbUJBQW1CLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDekMsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDaEMsY0FBYyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUMxQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO2lCQUMxQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7aUJBQ3JELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztpQkFDbkQsUUFBUSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2lCQUNqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7aUJBQ25ELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3BELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckM7SUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUEifQ==