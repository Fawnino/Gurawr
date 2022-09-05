const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "8ball",
  description: `Ask a question to Gura`,
  usage: "<question>",
  cooldown: 3,
  execute(message, args) {
    let MessageArgs = args.join(" ");
    if (!MessageArgs) {
      return message.channel.send("Please provide a question");
    }
    const answers = [
      "Yes",
      "No",
      "Maybe",
      "Ask Later",
      "No time to tell now",
      "No?",
      "Yes?",
      "yes? is that even a question?",
      "hell no is that even a serious question?",
      "Talk to me later when i'm done with your mom",
      `i\'ll deal with your shit later`,
      `I'm not dealing with your shit`,
      `Talk to me once you find your father`,
    ];
    const response = answers[Math.floor(Math.random() * answers.length)];

    const ball = new EmbedBuilder()
      .setColor("Random")
      .setTitle(MessageArgs)
      .setDescription(`:8ball: ${response}`);
    message.channel.send({ embeds: [ball] });
  },
};
