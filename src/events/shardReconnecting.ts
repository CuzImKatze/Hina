import { MessageEmbed, WebhookClient } from "discord.js";

module.exports = async (client, id, unavailableGuilds) => {
    const webhook = new WebhookClient("696691497357148231", "32SXRA4fDDAyHeHysbicbaY9DrofjZ3Hlydqm8o4SD5b4ZAmEPEZGKQe5d2r0_bWJDtE");
    const embed = new MessageEmbed()
        .setTitle("Hina - Status")
        .setColor("#3b7fff")
        .setDescription(`Shard ${id} is reconnecting...`)
        .setTimestamp();
    return webhook.send(embed);
};
