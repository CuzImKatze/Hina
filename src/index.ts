import * as dotenv from "dotenv";
import * as fs from "fs";
import * as logg from "logg.js";
dotenv.config();

import config = require("./config");
import { HinaClient } from "./hina/HinaClient";

const cmdDir = fs.readdirSync("./commands/");

const client = new HinaClient({ DisableMentions: true });

for (const dir of cmdDir) {
    client.groups.push(dir);
    logg.info("Start Loading CommandCategorys!", "HinaClient");
    logg.info("Loading command category " + dir + ".", "HinaClient");
    logg.info("Finished Loading Command categorys!", "HinaClient");
    const group = fs.readdirSync(`./commands/${dir}`);
    logg.info("Start Loading Commands!", "HinaClient");
    for (const commandFile of group) {
        logg.info("Loading command " + dir + "/" + commandFile.split(".")[0] + ".", "HinaClient");
        if (!commandFile.endsWith(".js")) {
            logg.info("No Commands!", "HinaClient");
        }
        // tslint:disable-next-line: no-var-requires
        const cmd = require(`./commands/${dir}/${commandFile}`);

        client.commands.set(commandFile.split(".")[0], cmd);
    }
    logg.info("Finished Command Loading!", "HinaClient");
}

fs.readdir("./events", (error, files) => {
    if (error) {
        logg.error(error, "EventHandler");
    }
    logg.info("Start Loading Events", "HinaClient");
    files.forEach((file) => {
        if (!file.endsWith(".js")) {
            return;
        }
        logg.info("Loading Event " + file.split(".")[0] + ".", "HinaClient");
        const event = require(`./events/${file}`);
        const eventName: any = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
    logg.info("Finished Loading Events!", "HinaClient");
});

client.login(process.env.TOKEN);
