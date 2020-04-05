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
        this.langs = ["en_us"];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGluYUNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oaW5hL0hpbmFDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFFdEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDekMsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFdkMsTUFBTSxVQUFXLFNBQVEsT0FBTyxDQUFDLE1BQU07SUFNbkMsWUFBWSxPQUFPLEdBQUcsRUFBRTtRQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRTFCLENBQUM7SUFDSyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU07O1lBQ3RCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ25DLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtvQkFDNUUsSUFBSSxJQUFJLENBQUM7b0JBQ1QsSUFBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDbkIsSUFBSSxHQUFHLE9BQU8sQ0FBQTt3QkFDZCxHQUFHLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7cUJBQzdFO3lCQUFNO3dCQUNILElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO3FCQUN4QjtvQkFDRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsY0FBYyxHQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQTtvQkFDeEQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2dCQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Q0FFSjtBQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFBIn0=