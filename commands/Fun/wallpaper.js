const { EmbedBuilder } = require("discord.js");
const nekoclient = require("nekos.life");
const neko = new nekoclient();

module.exports = {
  name: "wallpaper",
  description: "Sends a random wallpaper :D",
  execute(message, args, client) {
    if (!message.guild) return;
    async function wallpaper() {
      const GIF = await neko.sfw.wallpaper();
      const embed = new EmbedBuilder()
        .setColor("#202225")
        .setTitle(`${message.author.tag} here's a random wallpaper`)
        .setImage(GIF.url);
      message.channel.send({ embeds: [embed] });
    }
    wallpaper();
  },
};
