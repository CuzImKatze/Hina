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
    if (!message.member.hasPermission("MANAGE_GUILD")) {
        let embed = new discord_js_1.MessageEmbed()
            .setTitle(`Hina - Config: ${message.guild.name}`)
            .setColor("#3b7fff")
            .setDescription(yield client.string(message.guild.id, "noperms"))
            .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
            .setTimestamp();
        return message.channel.send(embed);
    }
    let values = ["set", "delete"];
    let values2 = ["modlog", "welcomechannel", "leavechannel", "welcomemessage", "leavemessage"];
    let value = args[0];
    let value2 = args[1];
    if (!values.includes(value)) {
        db.query("SELECT * FROM `settings` WHERE id = ?", [message.guild.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(error);
            if (result.length == 0) {
                let embed = new discord_js_1.MessageEmbed()
                    .setTitle(`Hina - Config: ${message.guild.name}`)
                    .setColor("#3b7fff")
                    .setDescription(yield client.string(message.guild.id, "config.info"))
                    .setThumbnail(message.guild.iconURL())
                    .addField("Modlog", "None")
                    .addField("WelcomeChannel", "None")
                    .addField("LeaveChanel", "None")
                    .addField("WelcomeMessage", "none")
                    .addField("LeaveMessage", "none")
                    .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
                    .setTimestamp();
                db.query("INSERT INTO settings (id) VALUES(?)", [message.guild.id]);
                return message.channel.send(embed);
            }
            else {
                let embed = new discord_js_1.MessageEmbed()
                    .setTitle(`Hina - Config: ${message.guild.name}`)
                    .setColor("#3b7fff")
                    .setDescription(yield client.string(message.guild.id, "config.info"))
                    .setThumbnail(message.guild.iconURL())
                    .addField("Modlog", result[0].modlog)
                    .addField("WelcomeChannel", result[0].welcomechannel)
                    .addField("LeaveChanel", result[0].leavechannel)
                    .addField("WelcomeMessage", result[0].welcomemessage)
                    .addField("LeaveMessage", result[0].leavemessage)
                    .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
                    .setTimestamp();
                return message.channel.send(embed);
            }
        }));
    }
    else {
        if (!values2.includes(value2))
            return message.channel.send(yield client.string(message.guild.id, "config.error"));
        db.query("SELECT * FROM `settings` WHERE id = ?", [message.guild.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
            if (result.length != 1) {
                if (value.includes("set")) {
                    if (value2.includes("modlog")) {
                        let text = message.mentions.channels.first();
                        if (!text)
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        db.query("INSERT INTO settings (id, modlog) VALUES(?, ?)", [message.guild.id, text.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("welcomechannel")) {
                        let text = message.mentions.channels.first();
                        if (!text)
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        db.query("INSERT INTO settings (id, welcomechannel) VALUES(?, ?)", [message.guild.id, text.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("leavechannel")) {
                        let text = message.mentions.channels.first();
                        if (!text)
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        db.query("INSERT INTO settings (id, leavechannel) VALUES(?, ?)", [message.guild.id, text.id]);
                        return message.react("✅");
                    }
                    let text = args.slice(2).join(" ");
                    db.query("INSERT INTO settings (id, " + value2 + ") VALUES(?, ?)", [message.guild.id, text]);
                    return message.react("✅");
                }
                else {
                    if (value2.includes("modlog")) {
                        db.query("INSERT INTO settings (id, modlog) VALUES(?, ?)", [message.guild.id, "none"]);
                        return message.react("✅");
                    }
                    if (value2.includes("welcomechannel")) {
                        db.query("INSERT INTO settings (id, welcomechannel) VALUES(?, ?)", [message.guild.id, "none"]);
                        return message.react("✅");
                    }
                    if (value2.includes("leavechannel")) {
                        db.query("INSERT INTO settings (id, leavechannel) VALUES(?, ?)", [message.guild.id, "none"]);
                        return message.react("✅");
                    }
                    db.query("INSERT INTO settings (id, " + value2 + ") VALUES(?, ?)", [message.guild.id, "none"]);
                    return message.react("✅");
                }
            }
            else {
                if (value.includes("set")) {
                    if (value2.includes("modlog")) {
                        let text = message.mentions.channels.first();
                        if (!text)
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        db.query("UPDATE settings SET modlog = ? WHERE id = ?", [text.id, message.guild.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("welcomechannel")) {
                        let text = message.mentions.channels.first();
                        if (!text)
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        db.query("UPDATE settings SET welcomechannel = ? WHERE id = ?", [text.id, message.guild.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("leavechannel")) {
                        let text = message.mentions.channels.first();
                        if (!text)
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        db.query("UPDATE settings SET leavechannel = ? WHERE id = ?", [text.id, message.guild.id]);
                        return message.react("✅");
                    }
                    let text = args.slice(2).join(" ");
                    if (!text)
                        return message.channel.send(yield client.string(message.guild.id, "config.notext"));
                    db.query("UPDATE settings SET " + value2 + " = ? WHERE id = ?", [text, message.guild.id]);
                    return message.react("✅");
                }
                else {
                    if (value2.includes("modlog")) {
                        db.query("UPDATE settings SET modlog = ? WHERE id = ?", ["none", message.guild.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("welcomechannel")) {
                        db.query("UPDATE settings SET welcomechannel = ? WHERE id = ?", ["none", message.guild.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("leavechannel")) {
                        db.query("UPDATE settings SET leavechannel = ? WHERE id = ?", ["none", message.guild.id]);
                        return message.react("✅");
                    }
                    db.query("UPDATE settings SET " + value2 + " WHERE id = ?", ["none", message.guild.id]);
                    return message.react("✅");
                }
            }
        }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2NvbmZpZ3VyYXRpb24vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzlELElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDcEIsSUFBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQzlDLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUNqQyxRQUFRLENBQUMsa0JBQWtCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEQsUUFBUSxDQUFDLFNBQVMsQ0FBQzthQUNuQixjQUFjLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2hFLFNBQVMsQ0FBQyxDQUFBLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUN2RixZQUFZLEVBQUUsQ0FBQTtRQUNmLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDakM7SUFDRCxJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUM5QixJQUFJLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFD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