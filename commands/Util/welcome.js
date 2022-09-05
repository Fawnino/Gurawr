const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "welcome",
  description: "Sends a welcome Message!",
  async execute(message) {
    const embed = new EmbedBuilder()
      .setTitle("Welcome to the server!")
      .setDescription(
        `Welcome, have a look around the server. Welcome again! make sure to have fun.`
      )
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  },
};
