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
const logg = require("logg.js");
module.exports = (client) => __awaiter(void 0, void 0, void 0, function* () {
    console.log();
    logg.info(`Successfully logged in as ${client.user.tag}`, "HinaClient");
    client.user.setStatus(`${client.config.status}`);
    const activities = client.config.activities;
    setInterval(() => {
        const activityRaw = activities[Math.floor(Math.random() * activities.length)];
        const activity = activityRaw
            .replace("$prefix", client.config.prefix)
            .replace("$guilds", client.guilds.cache.size)
            .replace("$users", client.users.cache.size);
        client.user.setActivity(activity, { type: client.config.activityType });
    }, 12000);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXZlbnRzL3JlYWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUM5QixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLDZCQUE2QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzVDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUUsTUFBTSxRQUFRLEdBQUcsV0FBVzthQUN2QixPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3hDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQzVDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUEsQ0FBQyJ9