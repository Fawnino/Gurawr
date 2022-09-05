const anime = require("anime-actions");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "bonk",
  description: "Bonk another user",
  usage: "(user)",
  args: 0,
  async execute(message, args, client) {
    try {
      const user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);

      if (!user) {
        return message.channel.send("Who Will U Bonk??????????");
      }

      let data = await anime.bonk();

      let embed = new EmbedBuilder()
        .setImage(data)
        .setColor(0x2f3136)
        .setTitle(`${message.author.username} bonks ${user.user.username}`)
        .setTimestamp();

      return message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send({ content: "API ERROR" });
    }
  },
};
