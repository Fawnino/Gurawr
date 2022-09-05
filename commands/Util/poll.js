const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "poll",
  description: "Starts a new Poll",
  permissions: "MANAGE_MESSAGES",
  usage: "(question)",
  args: 1,
  async execute(message, args, client) {
    const sayMessage = args.join(" ");
    message.delete().catch((err) => console.log(err));
    let embed = new EmbedBuilder()
      .setColor("#FFFFF")
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 512,
        })
      )
      .setTitle(`${message.author.tag} Asks:`)
      .setThumbnail(
        `https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/185/bar-chart_1f4ca.png`
      )
      .setDescription(sayMessage);

    const msg = await message.channel.send({ embeds: [embed] });
    await msg.react("✅");
    await msg.react("❌");
  },
};
