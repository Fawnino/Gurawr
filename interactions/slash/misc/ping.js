const { client, MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  // The data needed to register slash commands to Discord.
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong."),

  /**
   * @description Executes when the interaction is called by interaction handler.
   * @author Naman Vrati
   * @param {*} interaction The interaction object of the command.
   */

  async execute(interaction) {
    /**
     * @type {Object[]}
     * @description Array of all slash commands objects earlier registered.
     **/

    /**
     * @type {Object[]}
     * @description Help command's embed
     */

    await interaction.reply(`:ping_pong: Pong!`);
  },
};
