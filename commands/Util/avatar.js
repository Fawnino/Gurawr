const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Sends avatar of user mentioned",
  aliases: ["av"],
  usage: "(user)",
  async execute(message) {
    const avatar = message.mentions.users.first();
    const embed = new MessageEmbed()
      .setAuthor(
        message.member.displayName,
        message.member.user.displayAvatarURL()
      )
      .setColor("RANDOM")
      .setTitle(`**Here's the avatar of ${message.member.displayName}!**`)
      .setImage(
        message.author.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 512,
        })
      )
      .setTimestamp();
    if (!avatar) return message.channel.send({ embeds: [embed] });
    else if (avatar) {
      const embed2 = new MessageEmbed()
        .setAuthor(
          message.member.displayName,
          message.member.user.displayAvatarURL()
        )
        .setColor("RANDOM")
        .setTitle(`**Here's the avatar of ${avatar.username}!**`)
        .setImage(
          avatar.displayAvatarURL({ dynamic: true, format: "png", size: 512 })
        )
        .setTimestamp();
      message.channel.send({ embeds: [embed2] });
    }
  },
};
