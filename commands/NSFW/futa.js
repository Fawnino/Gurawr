const { EmbedBuilder } = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "futa",
  aliases: ["futanari"],
  descritpion: "Sends a random futa pic",
  async execute(message, args, client) {
    if (message.channel.nsfw === true) {
      superagent
        .get("https://nekobot.xyz/api/image")
        .query({ type: "futa" })
        .end((err, response) => {
          const embed = new EmbedBuilder()
            .setTitle("Random futa")
            .setImage(response.body.message)
            .setTimestamp();

          message.channel.send({ embeds: [embed] });
        });
    } else {
      message.channel.send(
        ":x: | This command must be executed in an nsfw channel!"
      );
    }
  },
};
