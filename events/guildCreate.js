const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildCreate",
  async execute(guild) {
    console.log(
      `Invited to a Guild: ${guild.name} // Members: ${guild.memberCount} // ID: ${guild.id}`
    );
    const embed = new MessageEmbed()
      .setTitle("Hello World!")
      .setDescription(
        "Hello! Aren't I such a great bot to be added here. My prefix is `$` and get started by using `$help`! Have fun using me."
      )
      .setTimestamp();
    guild.systemChannel.send({ embeds: [embed] }).catch((x) => x.return);
  },
};
