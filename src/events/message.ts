import { Message } from "discord.js";
import { IHinaClient } from "../hina/HinaClient";

module.exports = async (client: IHinaClient, message: Message) => {

    if (message.author.bot) { return; }

    const prefix = client.config.prefix;
    const messageArry = message.content.split(" ");
    const cmd = messageArry[0];
    const args = messageArry.slice(1);
    const author = message.author;
    const guild = message.guild;

    if (!message.content.startsWith(prefix)) {
        return;
    }

    const commandFile: any = client.commands.get(cmd.slice(prefix.length));
    if (commandFile) {
        commandFile.run(prefix, cmd, client, args, message);
    }

};
