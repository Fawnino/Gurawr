const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildCreate",
  async execute(guild, client) {
    const embed = new MessageEmbed()
      .setTitle("Hello World!")
      .setDescription(
        "Hello! Aren't I such a great bot to be added here. My prefix is `g!` and get started by using `g!help`! Have fun using me."
      )
      .setTimestamp();
    guild.systemChannel.send({ embeds: [embed] }).catch((x) => x.return);
  },
};
