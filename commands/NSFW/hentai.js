const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "hentai",
  descritpion: "Sends a random hentai",
  aliases: ["hanime", "animeh"],
  async execute(message, args, client) {
    if (message.channel.nsfw === true) {
      superagent
        .get("https://nekobot.xyz/api/image")
        .query({ type: "hentai" })
        .end((err, response) => {
          const embed = new MessageEmbed()
            .setTitle("Random Hentai")
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
