const { MessageEmbed } = require("discord.js"); // You can copy this line if you want to use message embeds in discord.
// Usually, if ur not using embeds or need discord.js dependecy. just remove this line above
module.exports = {
  name: "multiply",
  aliases: ["multiplication"], // If u do !add 10 10 or !addition 10 10  it would work
  description: "Multiplies numbers", // This is not important but u can add it if u want
  usage: "<num1> <num2>",
  args: 1, // This is the syntax, so if u do: !add 1 1 1 or !add 1 | it will mention this syntax
  async execute(message, args) {
    // The message and args mentioned here will become parameters and bascially below is the function of ur commands
    const num1 = +args[0]; // Num 1 will be the first argument
    const num2 = +args[1]; // Num 2 will be the second argument
    const numbers = parseInt(args);

    if (isNaN(numbers)) {
      return message.channel.send(
        ":negative_squared_cross_mark: | Use numbers piece of shit"
      );
    }
    const sum = new MessageEmbed() // Creates an embed
      .setTitle(`${num1} x ${num2} = ${num1 * num2}`)
      .setDescription(`Hey! Don't cheat in your homework!`)
      .setColor("#fdfd96")
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setFooter(`Requested by ${message.author.tag}`);

    message.channel.send({ embeds: [sum] }); // Sends the embed
  },
};
