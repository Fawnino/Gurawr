/**
 * @file Dynamic help command
 * @author Naman Vrati
 * @since 1.0.0
 */

// Deconstructing prefix from config file to use in help command
const { prefix } = require("../../config.json");
// Deconstructing MessageEmbed to create embeds within this command
const { MessageEmbed } = require("discord.js");
const { version } = require("../../package.json");

module.exports = {
  name: "help",
  description: "List all commands of bot or info about a specific command.",
  aliases: ["commands"],
  usage: "(command-name)",
  cooldown: 5,

  /**
   * @description Executes when the command is called by command handler.
   * @author Naman Vrati
   * @param {Object} message The Message Object of the command.
   * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
   */

  execute(message, args) {
    const { commands } = message.client;

    // If there are no args, it means it needs whole help command.

    if (!args.length) {
      /**
       * @type {Object}
       * @description Help command embed object
       */

      const helpEmbed = new MessageEmbed()
        .setColor(0x4286f4)
        .setURL(process.env.URL)
        .setTitle("List of all my commands\nPrefix is `$`")
        .addFields(
          {
            name: "Fun",
            value:
              "```8ball, coinflip, foodporn, meme, pp, waifu, urbandictionary, anime, kill, kiss, reversetext, hug, bonk, emoji, howgay, diceroll, ricklink, manga```",
          },
          {
            name: "General",
            value: "```help, invite, ping, advice, gurainfo```",
          },
          {
            name: "Util",
            value:
              "```purge, reload, say, stop, add, avatar, wikipedia, itunes, spotifyinfo, welcome, randompassword, server-stats ```",
          },
          {
            name: "Game Info",
            value: "```genshinconst, genshinchar, genshintalents```",
          },
          {
            name: "Administration",
            value: "```kick, ban, addrole, removerole, slowmode```",
          }
        )
        .setImage("https://imgur.com/dcu6Ek2.jpg")
        .setFooter(
          `\nYou can send ${prefix}help [command name] to get info on a specific command! | Version ${version}`
        );

      // Attempts to send embed in DMs.

      return message.author
        .send({ embeds: [helpEmbed] })

        .then(() => {
          if (message.channel.type === "dm") return;

          // On validation, reply back.

          message.reply({
            content: "I've sent you a DM with all my commands!",
          });
        })
        .catch((error) => {
          // On failing, throw error.

          console.error(
            `Could not send help DM to ${message.author.tag}.\n`,
            error
          );

          message.reply({ content: ":x:|It seems like I can't DM you!" });
        });
    }

    // If argument is provided, check if it's a command.

    /**
     * @type {String}
     * @description First argument in lower case
     */

    const name = args[0].toLowerCase();

    /**
     * @type {Object}
     * @description The command object
     */

    const command =
      commands.get(name) ||
      commands.find((c) => c.aliases && c.aliases.includes(name));

    // If it's an invalid command.

    if (!command) {
      return message.reply({ content: ":x:|That's not a valid command!" });
    }

    /**
     * @type {Object}
     * @description Embed of Help command for a specific command.
     */

    const commandEmbed = new MessageEmbed()
      .setColor(0x4286f4)
      .setTitle("Command Help");

    if (command.description) {
      commandEmbed.setDescription(`${command.description}`);
    }

    if (command.aliases) {
      commandEmbed
        .addField("Aliases", `\`${command.aliases.join(", ")}\``, true)
        .addField("Cooldown", `${command.cooldown || 3} second(s)`, true);
    }
    if (command.usage) {
      commandEmbed.addField(
        "Usage",
        `\`${prefix}${command.name} ${command.usage}\``,
        true
      );
    }

    // Finally send the embed.

    message.channel.send({ embeds: [commandEmbed] });
  },
};
