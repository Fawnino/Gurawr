/**
 * @file Sample Trigger command.
 * @author Naman Vrati
 * @since 2.0.0
 */

// For now, the only available property is name array. Not making the name array will result in an error.
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: ["hello"],

  /**
   * @description Executes when it is triggered by trigger handler.
   * @author Naman Vrati
   * @param {Object} message The Message Object of the trigger.
   * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array
   */

  execute(message, args) {
  },
};
