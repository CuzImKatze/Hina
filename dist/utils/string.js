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
let con = require("./database");
function strings(guild, strings) {
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
            let langFile = require("./../language/" + lang + ".json");
            resolve[langFile[strings]];
        }));
    });
}
module.exports = strings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUUvQixTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTztJQUMzQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ25DLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM1RSxJQUFJLElBQUksQ0FBQztZQUNULElBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLElBQUksR0FBRyxPQUFPLENBQUE7Z0JBQ2QsR0FBRyxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO2FBQzdFO2lCQUFNO2dCQUNILElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO2FBQ3hCO1lBQ0QsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQTtZQUN6RCxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIn0=