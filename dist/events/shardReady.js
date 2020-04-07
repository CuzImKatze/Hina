"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = (client, id, unavailableGuilds) => __awaiter(void 0, void 0, void 0, function* () {
    let webhook = new discord_js_1.WebhookClient("696691497357148231", "32SXRA4fDDAyHeHysbicbaY9DrofjZ3Hlydqm8o4SD5b4ZAmEPEZGKQe5d2r0_bWJDtE");
    let embed = new discord_js_1.MessageEmbed()
        .setTitle("Hina - Status")
        .setColor("#3b7fff")
        .setDescription(`Shard ${id} connected!`)
        .setTimestamp();
    return webhook.send(embed);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmRSZWFkeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ldmVudHMvc2hhcmRSZWFkeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUF1RDtBQUN2RCxNQUFNLENBQUMsT0FBTyxHQUFHLENBQU0sTUFBTSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFO0lBQ3BELElBQUksT0FBTyxHQUFHLElBQUksMEJBQWEsQ0FBQyxvQkFBb0IsRUFBRSxzRUFBc0UsQ0FBQyxDQUFBO0lBQzdILElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTtTQUM3QixRQUFRLENBQUMsZUFBZSxDQUFDO1NBQ3pCLFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDbkIsY0FBYyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7U0FDeEMsWUFBWSxFQUFFLENBQUE7SUFDZixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDOUIsQ0FBQyxDQUFBLENBQUEifQ==