const { EmbedBuilder } = require("discord.js");
const { Random } = require("something-random-on-discord");
const anime = require("anime-actions");

module.exports = {
  name: "waifu",
  description: "Sends a random waifu",
  usage: "(user)",
  async execute(message, args, client) {
    try {
      let data = await Random.getAnimeImgURL("waifu");

      let embed = new EmbedBuilder()
        .setImage(data)
        .setColor("#2F3136")
        .setTitle(`Here is your random Waifu!\ 💖`)
        .setTimestamp();

      return message.channel.send({ embeds: [embed] });
    } catch (err) {
      console.log(err);
      message.channel.send("404 Error, please try again.");
    }
  },
};
