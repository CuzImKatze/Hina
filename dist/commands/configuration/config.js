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
            if (result.length == 0) {
                db.query("INSERT INTO settings (id) VALUES (?)", [message.guild.id]);
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
                    .addField("WelcomeMessage", result[0].welcomechannel)
                    .addField("LeaveMessage", result[0].leavechannel)
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
            if (result.length == 0) {
                if (value.includes("set")) {
                    if (value2.includes("modlog")) {
                        let text = message.mentions.channel.first();
                        if (!text)
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        db.query("INSERT INTO settings (id, modlog) VALUES(?, ?)", [message.guild.id, text.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("welcomechannel")) {
                        let text = message.mentions.channel.first();
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
                    let text = args.join(2).slice(" ");
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
                        let text = message.mentions.channel.first();
                        if (!text)
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        db.query("UPDATE settings SET modlog = ? WHERE id = ?", [text.id, message.guild.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("welcomechannel")) {
                        let text = message.mentions.channel.first();
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
                    let text = args.join(2).slice(" ");
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
                    db.query("INSERT INTO settings (id, " + value2 + ") VALUES(?, ?)", [message.guild.id, "none"]);
                    return message.react("✅");
                }
            }
        }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2NvbmZpZ3VyYXRpb24vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzlELElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDcEIsSUFBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQzlDLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUNqQyxRQUFRLENBQUMsa0JBQWtCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEQsUUFBUSxDQUFDLFNBQVMsQ0FBQzthQUNuQixjQUFjLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2hFLFNBQVMsQ0FBQyxDQUFBLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUN2RixZQUFZLEVBQUUsQ0FBQTtRQUNmLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDakM7SUFDRCxJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUM5QixJQUFJLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFD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