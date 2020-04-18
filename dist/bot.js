"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const webhook = new discord_js_1.WebhookClient("696691497357148231", "32SXRA4fDDAyHeHysbicbaY9DrofjZ3Hlydqm8o4SD5b4ZAmEPEZGKQe5d2r0_bWJDtE");
const shard = new discord_js_1.ShardingManager("./index.js");
shard.on("shardCreate", (shrd) => {
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("Hina - Status")
        .setColor("#3b7fff")
        .setDescription(`Launching shard ${shrd.id}.....`)
        .setTimestamp();
    return webhook.send(embed);
});
shard.spawn(1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEwRTtBQUUxRSxNQUFNLE9BQU8sR0FBRyxJQUFJLDBCQUFhLENBQUMsb0JBQW9CLEVBQUUsc0VBQXNFLENBQUMsQ0FBQztBQUVoSSxNQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFaEQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7U0FDM0IsUUFBUSxDQUFDLGVBQWUsQ0FBQztTQUN6QixRQUFRLENBQUMsU0FBUyxDQUFDO1NBQ25CLGNBQWMsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDO1NBQ2pELFlBQVksRUFBRSxDQUFDO0lBQ3BCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMifQ==