const { EmbedBuilder } = require("discord.js");
const { Random } = require("something-random-on-discord");
const anime = require("anime-actions");

module.exports = {
  name: "hug",
  description: "Hugs another user",
  usage: "(user)",
  async execute(message, args, client) {
    try {
      const target =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);

      if (target.id == message.author.id) {
        return message.channel.send("You can't hug yourself lonely person!");
      }

      let data = await Random.getAnimeImgURL("hug");

      if (!target) {
        return message.channel.send("Who will you hug? 💗");
      }

      let embed = new EmbedBuilder()
        .setImage(data)
        .setColor("#2F3136")
        .setTitle(
          `${message.author.username} hugs ${target.user.username} \ 💖`
        )
        .setTimestamp();

      return message.channel.send({ embeds: [embed] });
    } catch (err) {
      console.log(err);
      message.channel.send("404 Error, please try again.");
    }
  },
};
