const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "gurainfo",
  description: "Get Info about Gura Bot",
  async execute(message, args, client) {
    const embed = new MessageEmbed()
      .setTitle("Wanna get to know me more?")
      .setDescription(
        "Hello! I'm Gura, a multipurpose Discord Bot that can provide you with lots and lots of Information and can entertain!"
      )
      .addFields({
        name: "Commands",
        value: "Use `$help` to get Information about commands and more!",
        inline: true,
      })
      .setTimestamp()
      .setThumbnail(message.author.avatarURL());
    message.channel.send({ embeds: [embed] });
  },
};
