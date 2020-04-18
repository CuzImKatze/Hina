import { Client, Collection } from "discord.js";
import { Connection } from "mysql2";
import { config, IConfig } from "../config";
import { con } from "../utils/database";

class HinaClient extends Client {
    public config: IConfig;
    public langs: string[];
    public con: Connection;
    public groups: string[];
    public commands: Collection<string, object>;
    constructor(options = {}) {
        super(options);

        this.config = config;
        this.groups = [];
        this.commands = new Collection();
        this.con = con;
        this.langs = ["en_us", "de_de"];

    }
    public string(guild, str: string): Promise<ILangFile> {
        return new Promise((resolve, reject) => {
            con.query("SELECT * FROM lang WHERE guildid = ?", [guild], async (err, result) => {
                let lang;
                if (result.length === 0) {
                    lang = "en_us";
                    con.query("INSERT INTO lang (guildid, lang) VALUES (?, ?)", [guild, lang]);
                } else {
                    lang = result[0].lang;
                }
                const langFile = require("../language/" + lang + ".json");
                resolve(langFile[str]);
            });
        });
    }

}
export { HinaClient, IHinaClient };

interface IHinaClient extends Client {
    config: IConfig;
    langs: string[];
    con: Connection;
    groups: string[];
    commands: Collection<string, object>;
    string: (guild, str: string) => Promise<ILangFile>;
}
interface ILangFile {
    string: string;
}
