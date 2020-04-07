import { ShardingManager, WebhookClient, MessageEmbed } from 'discord.js'

let webhook = new WebhookClient("696691497357148231", "32SXRA4fDDAyHeHysbicbaY9DrofjZ3Hlydqm8o4SD5b4ZAmEPEZGKQe5d2r0_bWJDtE")

const shard = new ShardingManager("./index.js")

shard.on("shardCreate", shard => {
    let embed = new MessageEmbed()
    .setTitle("Hina - Status")
    .setColor("#3b7fff")
    .setDescription(`Launching shard ${shard.id}.....`)
    .setTimestamp()
    return webhook.send(embed)
})


shard.spawn(1)

