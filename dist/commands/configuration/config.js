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
    const db = client.con;
    if (!message.member.hasPermission("MANAGE_GUILD")) {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`Hina - Config: ${message.guild.name}`)
            .setColor("#3b7fff")
            .setDescription(yield client.string(message.guild.id, "noperms"))
            .setFooter((yield client.string(message.guild.id, "requested")) + message.author.username)
            .setTimestamp();
        return message.channel.send(embed);
    }
    const values = ["set", "delete"];
    const values2 = ["modlog", "welcomechannel", "leavechannel", "welcomemessage", "leavemessage"];
    const value = args[0];
    const value2 = args[1];
    if (!values.includes(value)) {
        db.query("SELECT * FROM `settings` WHERE id = ?", [message.guild.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(error);
            if (result.length === 0) {
                const embed = new discord_js_1.MessageEmbed()
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
                const embed = new discord_js_1.MessageEmbed()
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
        if (!values2.includes(value2)) {
            return message.channel.send(yield client.string(message.guild.id, "config.error"));
        }
        db.query("SELECT * FROM `settings` WHERE id = ?", [message.guild.id], (error, result) => __awaiter(void 0, void 0, void 0, function* () {
            if (result.length !== 1) {
                if (value.includes("set")) {
                    if (value2.includes("modlog")) {
                        const text = message.mentions.channels.first();
                        if (!text) {
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        }
                        db.query("INSERT INTO settings (id, modlog) VALUES(?, ?)", [message.guild.id, text.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("welcomechannel")) {
                        const text = message.mentions.channels.first();
                        if (!text) {
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        }
                        db.query("INSERT INTO settings (id, welcomechannel) VALUES(?, ?)", [message.guild.id, text.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("leavechannel")) {
                        const text = message.mentions.channels.first();
                        if (!text) {
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        }
                        db.query("INSERT INTO settings (id, leavechannel) VALUES(?, ?)", [message.guild.id, text.id]);
                        return message.react("✅");
                    }
                    const text = args.slice(2).join(" ");
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
                        const text = message.mentions.channels.first();
                        if (!text) {
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        }
                        db.query("UPDATE settings SET modlog = ? WHERE id = ?", [text.id, message.guild.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("welcomechannel")) {
                        const text = message.mentions.channels.first();
                        if (!text) {
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        }
                        db.query("UPDATE settings SET welcomechannel = ? WHERE id = ?", [text.id, message.guild.id]);
                        return message.react("✅");
                    }
                    if (value2.includes("leavechannel")) {
                        const text = message.mentions.channels.first();
                        if (!text) {
                            return message.channel.send(yield client.string(message.guild.id, "config.nochannel"));
                        }
                        db.query("UPDATE settings SET leavechannel = ? WHERE id = ?", [text.id, message.guild.id]);
                        return message.react("✅");
                    }
                    const text = args.slice(2).join(" ");
                    if (!text) {
                        return message.channel.send(yield client.string(message.guild.id, "config.notext"));
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2NvbmZpZ3VyYXRpb24vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1EO0FBR25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQU8sTUFBYyxFQUFFLEdBQVcsRUFBRSxNQUFtQixFQUFFLElBQWMsRUFBRSxPQUFnQixFQUFFLEVBQUU7SUFDOUcsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDL0MsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzNCLFFBQVEsQ0FBQyxrQkFBa0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoRCxRQUFRLENBQUMsU0FBUyxDQUFDO2FBQ25CLGNBQWMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDaEUsU0FBUyxDQUFDLENBQUEsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ3ZGLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEM7SUFDRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqQyxNQUFNLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7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