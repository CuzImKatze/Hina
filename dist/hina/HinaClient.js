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
const config_1 = require("../config");
const database_1 = require("../utils/database");
class HinaClient extends discord_js_1.Client {
    constructor(options = {}) {
        super(options);
        this.config = config_1.config;
        this.groups = [];
        this.commands = new discord_js_1.Collection();
        this.con = database_1.con;
        this.langs = ["en_us", "de_de"];
    }
    string(guild, str) {
        return new Promise((resolve, reject) => {
            database_1.con.query("SELECT * FROM lang WHERE guildid = ?", [guild], (err, result) => __awaiter(this, void 0, void 0, function* () {
                let lang;
                if (result.length === 0) {
                    lang = "en_us";
                    database_1.con.query("INSERT INTO lang (guildid, lang) VALUES (?, ?)", [guild, lang]);
                }
                else {
                    lang = result[0].lang;
                }
                const langFile = require("../language/" + lang + ".json");
                resolve(langFile[str]);
            }));
        });
    }
}
exports.HinaClient = HinaClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGluYUNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oaW5hL0hpbmFDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFFaEQsc0NBQTRDO0FBQzVDLGdEQUF3QztBQUV4QyxNQUFNLFVBQVcsU0FBUSxtQkFBTTtJQU0zQixZQUFZLE9BQU8sR0FBRyxFQUFFO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFHLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFDTSxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQVc7UUFDNUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxjQUFHLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQzdFLElBQUksSUFBSSxDQUFDO2dCQUNULElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3JCLElBQUksR0FBRyxPQUFPLENBQUM7b0JBQ2YsY0FBRyxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUM5RTtxQkFBTTtvQkFDSCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDekI7Z0JBQ0QsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7Z0JBQzFELE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBRUo7QUFDUSxnQ0FBVSJ9