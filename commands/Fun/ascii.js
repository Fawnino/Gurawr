const figlet = require("figlet");

module.exports = {
  name: "ascii",
  description: "Transforms text into ASCII",
  usage: "(text)",
  async execute(message, args, client) {
    const textToTurnASCII = args.join(" ");

    figlet.text(textToTurnASCII, (err, text) => {
      if (err) return msg.channel.send(err);
      message.channel.send(`\`\`\` ${text.trimRight()} \`\`\``);
    });
  },
};
