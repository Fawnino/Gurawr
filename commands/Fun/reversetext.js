const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "reverse",
  aliases: ["reversetext"],
  description: "Reverses text",
  async execute(message, args, client) {
    let text = args.join(" ");
    if (!text) return message.channel.send("Please provide text to reverse");

    let newtext = text.split("").reverse().join("");
    const embed = new EmbedBuilder()
      .setTitle("Word Reverse")
      .addFields(
        { name: `Original Text`, value: `\`\`\`${text}\`\`\``, inline: true },
        {
          name: `Reversed Text`,
          value: `\`\`\`${newtext}\`\`\``,
          inline: false,
        }
      )
      .setColor("Random")
      .setTimestamp();

    return message.channel.send({ embeds: [embed] });
  },
};
