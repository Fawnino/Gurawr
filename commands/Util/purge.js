const { Permissions } = require("discord.js");

module.exports = {
  name: "purge",
  description: "Bulk deletes amount of messages mentioned",
  usage: "<1-100>",
  cooldown: 10,
  permissions: "MANAGE_MESSAGES",
  args: 0,
  async execute(message, args) {
    const number = parseInt(args[0]);
    if (isNaN(number)) {
      await message.reply(
        `:negative_squared_cross_mark: | Please provide a number`
      );
    } else {
      if (parseInt(args[0]) > 100 || parseInt(args[0]) <= 0) {
        return message.reply(
          ":negative_squared_cross_mark: | Please provide a number from 1-100 to purge "
        );
      }
      message.channel.bulkDelete(args[0]);
    }
  },
};
