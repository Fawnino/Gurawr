const { EmbedBuilder } = require("discord.js");
const nekoclient = require("nekos.life");
const neko = new nekoclient();

module.exports = {
  name: "anal",
  description: "Sends random anal",
  async execute(message, args, client) {
    if (message.channel.nsfw === true) {
      if (!message.guild) return;
      async function anal() {
        const GIF = await neko.nsfw.anal();
        const embed = new EmbedBuilder()
          .setColor("#202225")
          .setTitle(`${message.author.tag} here's a random anal image/gif`)
          .setImage(GIF.url);
        message.channel.send({ embeds: [embed] });
      }
      anal();
    } else {
      message.channel.send(
        ":x: | This command must be executed in an nsfw channel!"
      );
    }
  },
};
