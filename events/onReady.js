const { MessageEmbed } = require("discord.js");
const { version } = require("../package.json");
const { prefix, channelOnlineMessage } = require("../config.json");
/**
 * @file Ready Event File.
 * @author Naman Vrati
 * @since 1.0.0
 */
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    const start = Date.now();
    console.log(`Ready! Logged in as ${client.user.tag}`);
    setInterval(() => {
      const ms = Date.now() - start;
      console.log(`Second elapsed: ${Math.floor(ms / 1000)}`);
    }, 2000);

    const activities = [
      `${prefix}help | a.`,
      `${prefix}help | Version ${version}.`,
      `${prefix}help | ${client.guilds.cache.size} server(s).`,
    ];

    let i = 0;
    setInterval(
      () =>
        client.user.setActivity(activities[i++ % activities.length], {
          type: "PLAYING",
        }),
      15000
    );
    const embed = new MessageEmbed()
      .setTitle("Gura is now online!")
      .setAuthor({ name: "Gura", iconURL: client.user.displayAvatarURL })
      .addFields(
        { name: "Guilds", value: `${client.guilds.cache.size}`, inline: true },
        { name: "Users", value: `${client.users.cache.size}`, inline: true }
      )
      .setColor("#ADD8E6")
      .setTimestamp();
    client.channels.cache.get("1014471400658051102").send({ embeds: [embed] });
  },
};
