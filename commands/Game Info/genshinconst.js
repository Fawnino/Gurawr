const genshin = require("genshin-db");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "genshinconst",
  description: "Returns the constellation of a character",
  aliases: ["genshinconstellation"],
  usage: "(character)",
  args: 0,
  async execute(message, args, client) {
    const input = args.join(" ");
    const char = genshin.constellations(input);
    const char2 = genshin.characters(input);

    try {
      const embed = new EmbedBuilder()
        .setTitle(`${char.name}'s Constellations`)
        .setThumbnail(char2.images.image)
        .setColor("Random")
        .addFields(
          {
            name: `Constellation 1: ${char.c1.name}`,
            value: char.c1.effect,
            inline: true,
          },
          {
            name: `Constellation 2: ${char.c2.name}`,
            value: char.c2.effect,
            inline: false,
          },
          {
            name: `Constellation 3: ${char.c3.name}`,
            value: char.c3.effect,
            inline: false,
          },
          {
            name: `Constellation 4: ${char.c4.name}`,
            value: char.c4.effect,
            inline: true,
          },
          {
            name: `Constellation 5: ${char.c5.name}`,
            value: char.c5.effect,
            inline: false,
          },
          {
            name: `Constellation 6: ${char.c6.name}`,
            value: char.c6.effect,
            inline: false,
          }
        )

        .setTimestamp();

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send("Character not in database");
    }
  },
};
