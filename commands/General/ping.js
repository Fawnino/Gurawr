const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Replies with Pong!",
  cooldown: 3,
  aliases: ["test"],
  execute(message) {
    const pingEmbed = new MessageEmbed()
      .setColor("#CCCC00")
      .setTitle("🏓Pong!")
      .setDescription(
        `Current Ping: ${Date.now() - message.createdTimestamp}ms.`
      );

    message.channel.send({ embeds: [pingEmbed] });
  },
};
