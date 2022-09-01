const genshin = require("genshin-db");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "genshinchar",
  aliases: ["genshincharacter"],
  description: "Returns Genshin Characters",
  usage: "(character)",
  args: 0,
  async execute(message, args) {
    const input = args.join(" ");

    const char = genshin.characters(input);

    try {
      const embed = new MessageEmbed()
        .setTitle(`**${char.name}**`)
        .setThumbnail(char.images.icon)
        .setColor("RANDOM")
        .addFields(
          { name: "Titles:", value: char.title, inline: false },
          { name: "Element:", value: char.element, inline: false },
          { name: "Weapon Type:", value: char.weapontype, inline: false },
          { name: "Gender:", value: char.gender, inline: false },
          { name: "Region:", value: char.region, inline: false },
          { name: "Rarity:", value: char.rarity, inline: false },
          { name: "Birthday:", value: char.birthday, inline: false },
          { name: "Constellation:", value: char.constellation, inline: false },
          { name: "Substat:", value: char.substat, inline: false },
          { name: "Affiliation:", value: char.affiliation, inline: false },
          { name: "Description:", value: char.description, inline: true }
        )

        .setTimestamp();

      return message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send("Character not in database");
    }
  },
};
