import * as fs from "fs";
import { con } from "./database";

function strings(guild, str) {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM lang WHERE guildid = ?", [guild], async (err, result) => {
            let lang;
            if (result.length === 0) {
                lang = "en_us";
                con.query("INSERT INTO lang (guildid, lang) VALUES (?, ?)", [guild, lang]);
            } else {
                lang = result[0].lang;
            }
            const langFile = require("./../language/" + lang + ".json");
            resolve(langFile[str]);
        });
    });
}
export { strings };
