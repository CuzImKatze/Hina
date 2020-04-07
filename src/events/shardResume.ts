import { MessageEmbed, WebhookClient} from 'discord.js'
module.exports = async(client, id, unavailableGuilds) => {
    let webhook = new WebhookClient("696691497357148231", "32SXRA4fDDAyHeHysbicbaY9DrofjZ3Hlydqm8o4SD5b4ZAmEPEZGKQe5d2r0_bWJDtE")
    let embed = new MessageEmbed()
    .setTitle("Hina - Status")
    .setColor("#3b7fff")
    .setDescription(`Shard ${id} resumed!`)
    .setTimestamp()
    return webhook.send(embed)
}