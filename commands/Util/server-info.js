const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "server-info",
  aliases: ["serverinfo", `server`],
  description: "Displays the information about the server.",
  async execute(message, args, client) {
    const { guild } = message;
    let currentdate = new Date().toLocaleString();
    let guildname = message.guild.name;
    let guildid = message.guild.id;
    let guildmembers = message.guild.members.cache.size;
    let guildcreationdate = message.guild.createdAt.toLocaleDateString();
    const serverowner = await message.guild.fetchOwner();
    const { region } = guild;
    var guildicon = message.guild.iconURL();
    if (!guildicon) {
      guildicon =
        "https://media.tenor.com/images/92c980587e63a2fd99ef92022264094d/tenor.png";
    }
    const embed = new EmbedBuilder()
      .setColor("Blurple")
      .setAuthor(`Info for ${guildname}`, guildicon)
      .setTitle("📊 Server Info 📊")
      .setThumbnail(`${guildicon}`)
      .addFields(
        { name: "Member Count", value: `${guildmembers}`, inline: true },
        {
          name: "Server Creation Date",
          value: `${guildcreationdate}`,
          inline: true,
        },
        { name: "Server ID", value: `${guildid}`, inline: true },
        {
          name: "Server Region:",
          value: `${message.guild.preferredLocale}`,
          inline: true,
        },
        { name: "Server Owner", value: `${serverowner}`, inline: true }
      )
      .setFooter(` ● ${currentdate}`);
    message.channel.send({ embeds: [embed] });
  },
};
