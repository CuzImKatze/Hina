import * as discord from 'discord.js';
import * as fs from "fs";
import * as logg from 'logg.js';
import * as dotenv from "dotenv";
dotenv.config()
let config = "./config.json"
const HinaClient = require("./hina/HinaClient")
const cmdDir = fs.readdirSync("./commands/");


    let client = new HinaClient({ DisableMentions: true });

    for (let dir of cmdDir) {
        client.groups.push(dir);
        logg.info("Start Loading CommandCategorys!", "HinaClient");
        logg.info("Loading command category " + dir + ".", "HinaClient");
        logg.info("Finished Loading Command categorys!", "HinaClient");
        let group = fs.readdirSync(`./commands/${dir}`);
        for (let commandFile of group) {
            logg.info("Start Loading Commands!", "HinaClient");
            logg.info("Loading command " + dir + "/" + commandFile.split(".")[0] + ".", "HinaClient");
            logg.info("Finished Command Loading!", "HinaClient");
            if (!commandFile.endsWith(".js")) {
                logg.info("No Commands!", "HinaClient");
              }
              let cmd = require(`./commands/${dir}/${commandFile}`);

             client.commands.set(commandFile.split(".")[0], cmd);
        }
    }

    fs.readdir("./events", (error, files) => {
        if (error) {
            logg.error(error, "EventHandler");
        }
        files.forEach((file) => {
            if (!file.endsWith(".js")) {
                return
            }
            logg.info('Start Loading Events', 'HinaClient');
            logg.info('Loading Event ' + file.split(".")[0] + ".", "HinaClient");
            logg.info('Finished Loading Events!', 'HinaClient');
            const event = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        })
    })
    client.login(process.env.TOKEN); 