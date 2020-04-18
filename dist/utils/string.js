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
const database_1 = require("./database");
function strings(guild, str) {
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
            const langFile = require("./../language/" + lang + ".json");
            resolve(langFile[str]);
        }));
    });
}
exports.strings = strings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHlDQUFpQztBQUVqQyxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRztJQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ25DLGNBQUcsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM3RSxJQUFJLElBQUksQ0FBQztZQUNULElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQ2YsY0FBRyxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzlFO2lCQUFNO2dCQUNILElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3pCO1lBQ0QsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQztZQUM1RCxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNRLDBCQUFPIn0=