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
    const webhook = new discord_js_1.WebhookClient("696691497357148231", "32SXRA4fDDAyHeHysbicbaY9DrofjZ3Hlydqm8o4SD5b4ZAmEPEZGKQe5d2r0_bWJDtE");
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("Hina - Status")
        .setColor("#3b7fff")
        .setDescription(`Shard ${id} is reconnecting...`)
        .setTimestamp();
    return webhook.send(embed);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmRSZWNvbm5lY3RpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXZlbnRzL3NoYXJkUmVjb25uZWN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlEO0FBRXpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBTyxNQUFNLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEVBQUU7SUFDckQsTUFBTSxPQUFPLEdBQUcsSUFBSSwwQkFBYSxDQUFDLG9CQUFvQixFQUFFLHNFQUFzRSxDQUFDLENBQUM7SUFDaEksTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO1NBQzNCLFFBQVEsQ0FBQyxlQUFlLENBQUM7U0FDekIsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUNuQixjQUFjLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDO1NBQ2hELFlBQVksRUFBRSxDQUFDO0lBQ3BCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQyJ9