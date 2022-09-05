const axios = require("axios");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "spotifyinfo",
  description: "Returns spotify info on a track",
  usage: "(song)",
  async execute(message, args, client) {
    try {
      const url = args.join(" ");

      const voiceChannel = message.member.voice.channel;

      if (!url)
        return message.channel.send(
          "Please provide a url to find the preview of"
        );

      const data = await axios.get(
        `https://luminabot.xyz/api/json/spotify?link=${url}`
      );

      const info = data.data;

      const embed = new EmbedBuilder()
        .setTitle(info.title)
        .setURL(info.link)
        .setColor("Random")
        .addField("Artist", info.artist, true)
        .addField("Release Date", info.release, true)
        .addField(
          "Description",
          info.description ? info.description : "No description available",
          true
        )
        .addField(
          "Preview",
          `[Click me to Redirect to the mp3!](${info.audio})`,
          true
        )
        .addField("Type", info.type, true)
        .setThumbnail(info.image)
        .setTimestamp();

      return message.channel.send({ embeds: [embed] });
    } catch (e) {
      console.log(e);
      message.channel.send("Invalid Spotify Track URL");
    }
  },
};
