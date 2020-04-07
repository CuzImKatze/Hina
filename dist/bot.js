"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
let webhook = new discord_js_1.WebhookClient("696691497357148231", "32SXRA4fDDAyHeHysbicbaY9DrofjZ3Hlydqm8o4SD5b4ZAmEPEZGKQe5d2r0_bWJDtE");
const shard = new discord_js_1.ShardingManager("./index.js");
shard.on("shardCreate", shard => {
    let embed = new discord_js_1.MessageEmbed()
        .setTitle("Hina - Status")
        .setColor("#3b7fff")
        .setDescription(`Launching shard ${shard.id}.....`)
        .setTimestamp();
    return webhook.send(embed);
});
shard.spawn(1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5RTtBQUV6RSxJQUFJLE9BQU8sR0FBRyxJQUFJLDBCQUFhLENBQUMsb0JBQW9CLEVBQUUsc0VBQXNFLENBQUMsQ0FBQTtBQUU3SCxNQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7QUFFL0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO1NBQzdCLFFBQVEsQ0FBQyxlQUFlLENBQUM7U0FDekIsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUNuQixjQUFjLENBQUMsbUJBQW1CLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQztTQUNsRCxZQUFZLEVBQUUsQ0FBQTtJQUNmLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUM5QixDQUFDLENBQUMsQ0FBQTtBQUdGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUEifQ==