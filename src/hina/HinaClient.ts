import * as Discord from 'discord.js';
import { Connection } from 'mysql2'
const config = require("../config.json");
let con = require("../utils/database"); 

class HinaClient extends Discord.Client {
    public config: Object;
    public langs: Array<String>
    public con: Connection;
    public groups: Array<String>;
    public commands: Discord.Collection<String, Object>;
    constructor(options = {}) {
        super(options);

        this.config = config;
        this.groups = [];
        this.commands = new Discord.Collection();
        this.con = con;
        this.langs = ["en_us"]

    }
    async string(guild, string) {
        return new Promise((resolve, reject) => {
            con.query("SELECT * FROM lang WHERE guildid = ?", [guild], async(err, result) =>{
                let lang;
                if(result.length == 0) {
                    lang = "en_us"
                    con.query("INSERT INTO lang (guildid, lang) VALUES (?, ?)", [guild, lang])
                } else {
                    lang = result[0].lang
                }
                let langFile = require("../language/" +  lang + ".json")
                resolve(langFile[string])
            })
        }); 
    }                                                                                                                                                                                                                                                                                                                                                                                                                      
    
}
module.exports = HinaClient