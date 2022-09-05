const axios = require("axios");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "clydify",
  aliases: ["clyde-text"],
  description: "Clydifies your text",
  usage: "(display-text)",
  async execute(message, args, client) {
    if (!args[0]) return message.channel.send("Please provide some text");
    axios
      .get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(" ")}`)
      .then((res) => {
        const embed = new EmbedBuilder().setImage(res.data.message);
        message.channel.send({ embeds: [embed] });
      });
  },
};
