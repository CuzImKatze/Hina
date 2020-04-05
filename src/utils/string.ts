let con = require("./database")
import * as fs from 'fs'
function strings(guild, strings) {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM lang WHERE guildid = ?", [guild], async(err, result) =>{
            let lang;
            if(result.length == 0) {
                lang = "en_us"
                con.query("INSERT INTO lang (guildid, lang) VALUES (?, ?)", [guild, lang])
            } else {
                lang = result[0].lang
            }
            let langFile = require("./../language/" + lang + ".json")
            resolve[langFile[strings]]
        })
    });
}
module.exports = strings;