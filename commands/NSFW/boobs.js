const { EmbedBuilder } = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "boobs",
  descritpion: "Sends a random boobs pic",
  async execute(message, args, client) {
    if (message.channel.nsfw === true) {
      superagent
        .get("https://nekobot.xyz/api/image")
        .query({ type: "boobs" })
        .end((err, response) => {
          const embed = new EmbedBuilder()
            .setTitle("Random boobs")
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
