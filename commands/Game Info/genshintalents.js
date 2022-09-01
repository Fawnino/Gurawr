const genshin = require("genshin-db");
const Discord = require("discord.js");

module.exports = {
  name: "genshintalents",
  description: "Returns Talents of a specific Genshin character",
  usage: "(character)",
  args: 0,
  async execute(message, args) {
    const input = args.join(" ");
    const char = genshin.talents(input);
    const char2 = genshin.characters(input);

    try {
      const embed = new Discord.MessageEmbed()
        .setTitle(`${char.name}'s Talents'`)
        .setColor("RANDOM")
        .setThumbnail(char2.images.image)
        .addFields(
          { name: char.combat1.name, value: char.combat1.info, inline: true },
          {
            name: `${char.combat2.name}:`,
            value: char.combat2.info,
            inline: true,
          },
          { name: char.combat3.name, value: char.combat3.info, inline: true },
          { name: char.passive1.name, value: char.passive1.info, inline: true },
          { name: char.passive2.name, value: char.passive2.info, inline: true },
          { name: char.passive3.name, value: char.passive3.info, inline: true }
        )
        .setTimestamp();

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send("Character not in database");
    }
  },
};
