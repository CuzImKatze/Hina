import * as discord from 'discord.js'
import * as logg from 'logg.js'
module.exports = async (client) => {
    console.log();
    logg.info(`Successfully logged in as ${client.user.tag}`, "HinaClient");
    client.user.setStatus(`${client.config.status}`);
    let activities = client.config.activities;
    setInterval(function() {
      let activityRaw = activities[Math.floor(Math.random() * activities.length)];
      let activity = activityRaw.replace("$prefix", client.config.prefix).replace("$guilds", client.guilds.cache.size).replace("$users", client.users.cache.size)
      client.user.setActivity(activity, { type: client.config.activityType });
    }, 12000);
}