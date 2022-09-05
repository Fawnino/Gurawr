const { EmbedBuilder } = require("discord.js");
const nekoclient = require("nekos.life");
const neko = new nekoclient();

module.exports = {
  name: "trap",
  description: "Sends a random trap",
  async execute(message, args, client) {
    if (!message.guild) return;
    async function trap() {
      const GIF = await neko.nsfw.trap();
      const embed = new EmbedBuilder()
        .setColor("#202225")
        .setTitle(`${message.author.tag} here's a random trap image/gif`)
        .setImage(GIF.url);
      message.channel.send({ embeds: [embed] });
    }
    trap();
  },
};
