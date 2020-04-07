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
const Discord = require("discord.js");
const config = require("../config.json");
let con = require("../utils/database");
class HinaClient extends Discord.Client {
    constructor(options = {}) {
        super(options);
        this.config = config;
        this.groups = [];
        this.commands = new Discord.Collection();
        this.con = con;
        this.langs = ["en_us", "de_de"];
    }
    string(guild, string) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                con.query("SELECT * FROM lang WHERE guildid = ?", [guild], (err, result) => __awaiter(this, void 0, void 0, function* () {
                    let lang;
                    if (result.length == 0) {
                        lang = "en_us";
                        con.query("INSERT INTO lang (guildid, lang) VALUES (?, ?)", [guild, lang]);
                    }
                    else {
                        lang = result[0].lang;
                    }
                    let langFile = require("../language/" + lang + ".json");
                    resolve(langFile[string]);
                }));
            });
        });
    }
}
module.exports = HinaClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGluYUNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oaW5hL0hpbmFDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFFdEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDekMsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFdkMsTUFBTSxVQUFXLFNBQVEsT0FBTyxDQUFDLE1BQU07SUFNbkMsWUFBWSxPQUFPLEdBQUcsRUFBRTtRQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUVuQyxDQUFDO0lBQ0ssTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNOztZQUN0QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNuQyxHQUFHLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQzVFLElBQUksSUFBSSxDQUFDO29CQUNULElBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQ25CLElBQUksR0FBRyxPQUFPLENBQUE7d0JBQ2QsR0FBRyxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO3FCQUM3RTt5QkFBTTt3QkFDSCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtxQkFDeEI7b0JBQ0QsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsR0FBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUE7b0JBQ3hELE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtnQkFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBRUo7QUFDRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQSJ9